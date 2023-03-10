
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_STORAGE_KEY = "videoplayer-current-time";


player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    localStorage.setItem(TIME_STORAGE_KEY, event.seconds);
    // return console.log("Current time:", localStorage.getItem(TIME_STORAGE_KEY));

    // const durationTime = event.duration;
//   if (currentTime === durationTime) {
//     localStorage.removeItem(STORAGE_KEY);
//   }

}

const currentTime = localStorage.getItem(TIME_STORAGE_KEY) || 0;

player.setCurrentTime(currentTime).then(function(seconds) {
console.log(seconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log("The time was less than 0 or greater than the video’s duration!");
            break;

        default:
            console.log("Some other error occured!");
            break;
    }
});
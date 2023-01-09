// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
).join('');
galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);


new SimpleLightbox('.gallery a', {
//   captions: 'true',  
  captionsData: 'alt',
    captionDelay: 250,
    // nav: true,
    // navText: ['←','→'],
});
 
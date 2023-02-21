import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const divList = document.querySelector('.gallery');
const cardMarkup = createImageCardMarkup(galleryItems);

divList.insertAdjacentHTML('beforeend', cardMarkup);

function createImageCardMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

import { galleryItems } from './gallery-items';
import galleryItemTpl from '../templates/gallery-items.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const galleryRef = document.querySelector('.gallery');
const galleryMurkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMurkup);
galleryRef.addEventListener('click', onImageToCreateModal);

function createGalleryMarkup(gallery) {
  return gallery.map(galleryItemTpl).join('');
}

function onImageToCreateModal(e) {
  e.preventDefault();
  const gallery = new SimpleLightbox('.gallery a');
}

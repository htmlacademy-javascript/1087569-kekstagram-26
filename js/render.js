import { getPhotos } from './data.js';

const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');
const setPhotos = getPhotos();
const fragment = document.createDocumentFragment();

setPhotos.forEach((photo) => {
  const photoItem = templatePhoto.cloneNode(true);
  photoItem.querySelector('.picture__img').src = photo.url;
  photoItem.querySelector('.picture__likes').textContent = photo.likes;
  photoItem.querySelector('.picture__comments').textContent = photo.comments.length;
  fragment.appendChild(photoItem);
});

function renderPhotos() {
  photosContainer.appendChild(fragment);
}

renderPhotos();
export {renderPhotos};

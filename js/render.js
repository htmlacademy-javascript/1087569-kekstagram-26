function renderPhotos(photos) {
  const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
  const photosContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoItem = templatePhoto.cloneNode(true);
    photoItem.querySelector('.picture__img').src = photo.url;
    photoItem.querySelector('.picture__likes').textContent = photo.likes;
    photoItem.querySelector('.picture__comments').textContent = photo.comments.length;
    photoItem.querySelector('.picture__img').dataset.id = photo.id;
    fragment.appendChild(photoItem);
  });
  photosContainer.appendChild(fragment);
}

export {renderPhotos};

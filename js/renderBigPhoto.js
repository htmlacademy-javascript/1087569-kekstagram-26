const bigPicturePopup = document.querySelector('.big-picture');

function renderBigPhoto (photos) {
  const photosContainer = document.querySelector('.pictures');
  const photoImg = bigPicturePopup.querySelector('.big-picture__img').querySelector('img');
  const countLikes = bigPicturePopup.querySelector('.likes-count');
  const countComments = bigPicturePopup.querySelector('.comments-count');
  const descriptionPhoto = bigPicturePopup.querySelector('.social__caption');
  const cancelButton  = bigPicturePopup.querySelector('.big-picture__cancel');
  photosContainer.addEventListener('click', (evt) => {
    document.querySelector('body').classList.add('modal-open');
    bigPicturePopup.querySelector('.social__comment-count').classList.add('hidden');
    bigPicturePopup.querySelector('.comments-loader').classList.add('hidden');
    const id = evt.target.dataset.id;
    const photo = photos.find((elem) => elem.id === +id);
    photoImg.src = photo.url;
    countLikes.textContent = photo.likes;
    countComments.textContent = photo.comments.length;
    descriptionPhoto.textContent = photo.description;
    renderComments(photo);
    bigPicturePopup.classList.remove('hidden');
    cancelButtonEvent();
    EscEvent();
  });

  function cancelButtonEvent () {
    cancelButton.addEventListener('click', () => {
      bigPicturePopup.classList.add('hidden');
    });
  }

  function EscEvent () {
    document.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape') {
        bigPicturePopup.classList.add('hidden');
      }
    });
  }

  cancelButton.removeEventListener('click', cancelButtonEvent);
  document.removeEventListener('keydown', EscEvent);
}

function renderComments (photo) {
  const commentsContainer = bigPicturePopup.querySelector('.social__comments');
  const templateComment = bigPicturePopup.querySelector('.social__comment').cloneNode(true);
  commentsContainer.innerHTML = '';
  photo.comments.forEach((element) => {
    const comment = templateComment.cloneNode(true);
    const commentPhoto = comment.querySelector('img');
    commentPhoto.src = element.avatar;
    commentPhoto.alt = element.name;
    comment.querySelector('p').textContent = element.message;
    commentsContainer.appendChild(comment);
  });
}

export { renderBigPhoto };

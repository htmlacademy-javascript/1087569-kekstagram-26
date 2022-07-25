import { getPhotos } from './data.js';
import { renderPhotos } from './render.js';
import { renderBigPhoto } from './renderBigPhoto.js';
const photos = getPhotos();
renderPhotos( photos );
renderBigPhoto(photos);

import {getRandomNumber} from './util.js';
//Набор комментариев к фото
const SET_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Набор имен
const SET_NAMES = [
  'Георгий',
  'Антон',
  'Мария',
  'Егор',
  'Виктория',
  'Дмитрий',
  'Надежда',
  'Александр',
  'Сергей',
  'Ольга'
];

let commentId = 1;
//Функция строитель комментариев
const createComment = () => ({
  id:commentId++,
  avatar:`img/avatar-${  getRandomNumber(1, 6)  }.svg`,
  message:SET_MESSAGES[getRandomNumber(0,SET_MESSAGES.length - 1)],
  name:SET_NAMES[getRandomNumber(0,SET_NAMES.length - 1)]
});

//Функция строитель для конечного массива
const createPhoto = (_,i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: `Описание${i + 1}`,
  likes: getRandomNumber(15, 200),
  comments: Array.from({length:getRandomNumber(1,10)}, createComment)
});

const getPhotos = function () {
  return Array.from({length:25}, createPhoto);
};

export {getPhotos};

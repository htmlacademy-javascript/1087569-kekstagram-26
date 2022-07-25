function getRandomNumber(min, max) {
  if (max > min && max >= 0 && min >= 0 && typeof(max) === 'number' && typeof(min) === 'number') {
    min = Math.floor(min); //Округление до меньшего целого числа
    max = Math.floor(max); //Округление до меньшего целого числа
    return Math.floor(Math.random() * (max - min + 1) + min); //Максимум и минимум включаются
  } else if (max === min) {
    return max;
  }

  throw new Error ('Некорректный тип данных');
}

getRandomNumber();

function checkLengthString (comment = '', maxLengthComment = 0) {
  if (typeof(comment) === 'string' && typeof(maxLengthComment) === 'number') {
    return comment.length <= maxLengthComment;
  }

  throw new Error ('Некорректный тип данных');
}

checkLengthString();
export {getRandomNumber,checkLengthString};

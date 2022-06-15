function getRandomNumber(min, max) {
  if (max > min && max >= 0 && min >= 0 && typeof(max) === 'number' && typeof(min) === 'number') {
    min = Math.floor(min); //Округление до меньшего целого числа
    max = Math.floor(max); //Округление до меньшего целого числа
    return Math.floor(Math.random() * (max - min + 1) + min); //Максимум и минимум включаются
  } else if (max === min) {
    return max;
  }

  return 'Введены некорректные значения для диапазона';
}

getRandomNumber();

function checkLengthString (comment, maxLengthComment) {
  if (String(comment).length <= maxLengthComment) {
    return true;
  }

  return false;
}

checkLengthString();

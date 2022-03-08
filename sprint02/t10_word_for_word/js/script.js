const filter = (word) =>
  word.filter((item, index) => word.indexOf(item) === index && item !== '');

const addWords = (obj, wrds) => {
  const oldStr = obj.words.trim();
  const newStr = oldStr + ' ' + wrds;
  const arrWords = newStr.split(' ');
  const result = filter(arrWords).join(' ');
  obj.words = result;
  return;
};

function removeWords(obj, wrds) {
  const removeItem = obj.words;
  const arrWords = removeItem.split(' ');
  const filterWord = filter(arrWords);
  const filterWrds = filter(wrds.split(' '));
  const result = filterWord
    .filter((item) => !filterWrds.includes(item))
    .join(' ');
  obj.words = result;
  return;
}
const changeWords = (obj, oldWrds, newWrds) => {
  const changeItem = obj.words.split(' ');
  const filterWrds = filter(changeItem);
  const oldWords = filter(oldWrds.split(' '));
  const newWords = filter(newWrds.split(' '));
  const result = oldWords
    .map((item, iter) => {
      if (filterWrds.includes(item)) {
        return newWords[iter];
      }
      return oldWords[iter];
    })
    .join(' ');
  obj.words = result.trim();
  return;
};

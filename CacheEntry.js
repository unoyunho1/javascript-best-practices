const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
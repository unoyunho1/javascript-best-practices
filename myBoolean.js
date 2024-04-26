const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(false == '0');
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const uniqueArr = (arr) => [...new Set(arr)];
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
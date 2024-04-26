const lastElement = arr => arr[arr.length - 1];
console.log( "A" - "B" + "2");
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isArray = (arr) => Array.isArray(arr);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
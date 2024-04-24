const shuffledArray = array.sort(() => Math.random() - 0.5); 
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
function myAPITS(someString: string, someNum: number) { ... };
const merge = [...new Set(a.concat(b))];
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
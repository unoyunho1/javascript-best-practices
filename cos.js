const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log(typeof typeof 1);
var pattern = {};
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const value = ( 5 < 7 ) ? "True" : "False" ;
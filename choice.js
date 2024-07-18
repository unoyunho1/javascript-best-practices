const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const maxNumber = arr => Math.max(...arr);
const timeFromDate = date => date.toTimeString().slice(0, 8);
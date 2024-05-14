const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const merge = [...new Set(a.concat(b))];
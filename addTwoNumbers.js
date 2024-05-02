const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isEmptyArray = arr => !arr.length;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const getRandomBoolean = () => Math.random() >= 0.5;
const isWeekday = (date) => date.getDay() % 6 !== 0;
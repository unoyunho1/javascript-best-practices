const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const apmRootPath = path.join(repositoryRootPath, 'apm');
const reversedString = str => str.split('').reverse().join('');
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
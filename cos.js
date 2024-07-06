const isWeekday = (date) => date.getDay() % 6 !== 0;
const symbolsPath = path.join(buildOutputPath, 'symbols');
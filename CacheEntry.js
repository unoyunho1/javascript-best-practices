const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const results = await Promise.all(resultingPromises);
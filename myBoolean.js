const results = await Promise.all(resultingPromises);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const lastElement = arr => arr[arr.length - 1];
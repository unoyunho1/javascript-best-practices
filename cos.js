const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const merge = (a, b) => [...a, ...b];
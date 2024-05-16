const results = await Promise.all(resultingPromises);
const lastElement = arr => arr[arr.length - 1];
const repositoryRootPath = path.resolve(__dirname, '..');
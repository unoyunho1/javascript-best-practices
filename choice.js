const randomBoolean = () => Math.random() >= 0.5;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const lastElement = arr => arr[arr.length - 1];
const merge = (a, b) => a.concat(b);
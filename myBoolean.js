function myAPITS(someString: string, someNum: number) { ... };
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const resultingPromises = urls.map((url) => makHttpRequest(url));
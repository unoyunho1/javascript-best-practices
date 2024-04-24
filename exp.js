console.log(1 +  "2" + "2");
console.log( "A" - "B" + "2");
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const appName = getAppName(channel);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(+"1" +  "1" + "2");
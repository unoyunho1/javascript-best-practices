console.log(+"1" +  "1" + "2");
const merge = [...new Set(a.concat(b))];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
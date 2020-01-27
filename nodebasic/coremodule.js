const path = require('path')

//Connect two path(url)
const filename = path.join(__filename);

//for base name or filename
const basename = path.basename(filename);

// chk extension of file
const extname = path.extname(basename);

console.log(filename);
console.log(basename);
console.log(extname);
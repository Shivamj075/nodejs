//file system module how we copy paste retrieve data of file.

const fs = require('fs');

fs.copyFileSync("fileone.txt", "filetwo.txt");  //(src,dest) if dest not exists it create it


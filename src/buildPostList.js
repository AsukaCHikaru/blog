const fs = require('fs');
const path = __dirname + '/contents';

function buildPostLists() {
  let result = {};
  fs.readdir(path, (err, files) => {
    files.forEach((file) => {      
      const fileName = file.replace(/(.+)\.md/, '$1');      
      result[fileName] = file;
    });
    fs.writeFile('./public/posts.json', JSON.stringify(result), (err) => {
      if(err) console.log(err);
      console.log('created lists at posts.json');    
    });
  });
}

buildPostLists();
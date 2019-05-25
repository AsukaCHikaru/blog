const sort = require('./logic/sort');
const fs = require('fs');
const path = __dirname + '/contents';

function buildPostdata() {
  let result = {all: []};
  fs.readdir(path, (err, files) => {
    files.forEach((file) => {      
      result.all.push({path: file});
    });

    let len = result.all.length;

    result.all.forEach((file, i) => {
      fs.readFile(`${path}/${file.path}`, 'utf8', (err, data) => {
        if(err) throw err;
        const date = RegExp(/date:\s(.+)/).exec(data)[1];
        const title = RegExp(/title:\s"(.+)"/).exec(data)[1];
        const tags = RegExp(/tags:\s(.+)/).exec(data)[1].split(/,\s*/);
        const category = RegExp(/category:\s(.+)/).exec(data)[1];
        result.all[i].date = date;
        result.all[i].title = title;
        result.all[i].tags = tags;
        result.all[i].category = category;

        let count = 0;
        result.all.forEach((post) => {
          if(post.date) count++;
          if(count===len){

            let sorted = sort(result.all);
            result.all = sorted;
            fs.writeFile('./src/postdata.js', 'export const postdata = '+ JSON.stringify(result), (err) => {
              if(err) console.log(err);
              console.log('created lists at postdata.js');    
            });
          }
        });
        
          
      });      
    });
  });
}

function sort1(posts){
  let i = 0;
  function y(post){
    return parseInt(post.date.substr(0, 4));
  }
  function m(post){
    return parseInt(post.date.substr(5, 2));
  }
  function d(post) {
    return parseInt(post.date.substr(8));
  }
  while(i < posts.length-1){
    if(posts[i].date && posts[i+1].date){
      if(
        y(posts[i]) < y(posts[i+1]) ||
        (y(posts[i]) === y(posts[i+1]) && m(posts[i]) < m(posts[i+1])) ||
        (y(posts[i]) === y(posts[i+1]) && m(posts[i]) === m(posts[i+1]) && d(posts[i]) < d(posts[i+1]))
      ){
        let temp = posts[i];
        posts[i] = posts[i+1];
        posts[i+1] = temp;
        i = 0;
      }      
    }
    i++;
  } 
}

buildPostdata();
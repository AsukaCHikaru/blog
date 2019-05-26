const formerIsOlder = require('./formerIsOlder');

function sort(arr) {
  if(arr.length <= 1) return arr;
  else{
    let old = [];
    let neww = [];
    let pivot = arr.pop();

    for(let i = 0; i < arr.length; i++){
      if(formerIsOlder(arr[i], pivot)) old.push(arr[i]);
      else neww.push(arr[i]);
    }    
    const result = [...sort(neww), pivot, ...sort(old)];
    
    return result;
  }
}

module.exports = sort;
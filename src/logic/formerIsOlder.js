function formerIsOlder(post1, post2) {
  const p1 = new Post(post1);
  const p2 = new Post(post2);  
  
  let p1IsOlder = 
    (p1.y<p2.y) ||
    (p1.y===p2.y&&p1.m<p2.m) || 
    (p1.y===p2.y&&p1.m===p2.m&&p1.d<p2.d);
  
  return p1IsOlder;
}

function Post(post){
  this.y = parseInt(post.date.substr(0, 4));
  this.m = parseInt(post.date.substr(5, 2));
  this.d = parseInt(post.date.substr(8, 2));
}

module.exports = formerIsOlder;
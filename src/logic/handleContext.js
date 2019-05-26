import marked from 'marked';

const preParsedYTLink = RegExp(/<p>\(<a\shref="https:\/\/www\.youtube\.com\/watch\?v=(.+)".+/);
const targetStrYT = '<div class="youtube"><iframe type="text/html" src="https://youtube.com/embed/$1"></iframe></div>';

const preParsedImg = RegExp(/<p>\(pic([0-9])\)/);
const TargetStrImg = '<div class="imgWrapper"><img src="../contents/folder_place_holder/$1.jpg"></div>';

marked.setOptions({
  headerIds: false,
});

function handleContext(text) {
  let folder = RegExp(/slug:\s(.+)/).exec(text)[1];
  
  let context = marked(text);
  while(preParsedYTLink.exec(context)!==null){
    context = context.replace(preParsedYTLink, targetStrYT);
  }
  while(preParsedImg.exec(context)!==null){
    context = context.replace(preParsedImg, TargetStrImg.replace('folder_place_holder', folder));
  }
  return context;
}

export default handleContext;
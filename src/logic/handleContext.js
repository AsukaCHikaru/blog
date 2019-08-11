import marked from "marked";
import Prism from "prismjs";

const preParsedYTLink = RegExp(
  /<p>\(<a\shref="https:\/\/www\.youtube\.com\/watch\?v=(.+)".+/
);
const targetStrYT =
  '<div class="youtube"><iframe type="text/html" src="https://youtube.com/embed/$1"></iframe></div>';

const preParsedImg = RegExp(/<p>\(pic([0-9])\)/);
const targetStrImg =
  '<div class="imgWrapper"><img src="../contents/folder_place_holder/$1.jpg"></div>';

const preParsedLink = RegExp(/<a\shref="(.+)">(.+)<\/a>/);
const targetStrLink =
  '<a target="_blank" rel="noopener noreferrer" href="$1">$2</a>';

marked.setOptions({
  headerIds: false,
  highlight: (code, lang, callback) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

export const handleContext = text => {
  let folder = RegExp(/slug:\s(.+)/).exec(text)[1];

  let context = marked(text);

  while (preParsedYTLink.exec(context) !== null) {
    context = context.replace(preParsedYTLink, targetStrYT);
  }
  while (preParsedImg.exec(context) !== null) {
    context = context.replace(
      preParsedImg,
      targetStrImg.replace("folder_place_holder", folder)
    );
  }

  while (preParsedLink.exec(context) !== null) {
    context = context.replace(preParsedLink, targetStrLink);
  }

  return context;
};

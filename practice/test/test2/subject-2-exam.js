// root style - dynamic
let root = document.getElementById('root');
root.style.display = rootStyle.display;
root.style.gridTemplateColumns = rootStyle.gridTemplateColumns;
root.style.gridTemplateRows= rootStyle.gridAutoRows;
root.style.gap = rootStyle.gap;
root.style.width = rootStyle.width;
root.style.minHeight = rootStyle.minHeight;
root.style.height = rootStyle.height;
root.style.margin = rootStyle.margin;
root.style.gridAutoRows = rootStyle.gridAutoRows;

// children style - dynamic
// 각 학생 div의 style
for(i=0; i<names.length; i++) {
  root.children[i].style.display = childrenStyle.display;
  root.children[i].style.alignItems = childrenStyle.alignItems;
  root.children[i].style.justifyContent = childrenStyle.justifyContent;
  root.children[i].style.fontSize = childrenStyle.fontSize;
  root.children[i].style.backgroundColor = childrenStyle.backgroundColor;
  root.children[i].style.border = childrenStyle.border;
  root.children[i].style.padding = childrenStyle.padding;
}



// mobile
if(matchMedia("(max-width: 600px)").matches) {
  root.style.gridTemplateColumns = mediaQueries['max-width: 600px'].root.gridTemplateColumns;
  root.style.gridAutoRows = mediaQueries['max-width: 600px'].root.gridAutoRows;
}
// tablet 
else if(matchMedia("(min-width: 601px) and (max-width: 900px)").matches) {
  root.style.gridTemplateColumns = mediaQueries['min-width: 601px and max-width: 900px'].root.gridTemplateColumns;
  root.style.gridAutoRows = mediaQueries['min-width: 601px and max-width: 900px'].root.gridAutoRows;
}

// 창의 크기가 변경되면 새로고침
window.onresize = function(){
  document.location.reload();
};
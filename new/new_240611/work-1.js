function formatHTML(language) {
  let htmlData = {
    title: "최유진은",
    subTitle: "yujinchoi is",
    h1: "약을 먹어서",
    p: "졸린가?",
  };

  let decision = () => {
    if (language === "ko") {
      return htmlData.title;
    } else if (language === "en") {
      return htmlData.subTitle;
    }
  };

  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;

  return html;
}

console.log(formatHTML("ko"));
console.log(formatHTML("en"));

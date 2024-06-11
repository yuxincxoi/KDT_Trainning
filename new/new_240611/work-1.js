function formatHTML() {
  let htmlData = {
    title: "최유진은",
    h1: "약을 먹어서",
    p: "졸린가?",
  };

  let html = `
  <html>
    <head>
      <title>${htmlData.title}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;

  return html;
}

console.log(formatHTML());

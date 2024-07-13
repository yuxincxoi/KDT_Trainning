import React, { CSSProperties } from "react";
import Card from "./Card";
import ArrowDot from "./ArrowDot";
import Vertical from "./Vertical";

const App: React.FC = () => {
  // const styleMaker = (element: HTMLElement | null, style: CSSProperties) => {
  //   if (element) {
  //     Object.assign(element.style, style);
  //   }
  // };

  let styles = {
    width: "100vw",
    height: "100vh",
    background:
      "url('https://s3-alpha-sig.figma.com/img/284a/a4b3/3854223ba1861a51428da5234a85d5aa?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRbsgffm~kBiYsHLUoiA5J6Y9nUesIQy5fvjUzeWwEhZAxJWDS8duD2IVTb5M1zB4VxYsKkT7CPr2RSilVmIKgRUw1uYD775Dl~p70wOd68IF2HzusIVg87RoxIkJipE2~7Uj9pSa0o5cAZkgAL7UcDk-BYviXLwZvwO0vrTBa7iR5UHPIeXnV3VOMeXvG24quW~xdYQJBa763BPTpyb1eorQbgpg5gMHehQxV1BDEgtqma7Jtnb3oWKEmW88-iKuBBshEOCut3EPsAkXF2LoSkBf2e6r1XllE0FBk8HIKGLFfboBiP3MuBGPykEqUnXOmR23~J5JhdAGbK6JXGZVw__')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  //   card: {
  //     top: "270px",
  //     left: "150px",
  //     width: "780px",
  //     height: "365px",
  //     borderRadius: "31px",
  //     border: "1px solid",
  //     borderImageSource:
  //       "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(125, 114, 87, 0.5) 100%)",
  //     background:
  //       "linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)",
  //     boxShadow: "1px 4px 15.6px -5px #574C31",
  //     position: "absolute",
  //     backdropFilter: "blur(15px)",
  //     fontFamily: "Inter",
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: "64px",
  //     lineHeight: "77px",
  //     textAlign: "justify",
  //     color: "#23201a",
  //   },
  //   arrowDot: {
  //     width: "23px",
  //     height: "40px",
  //     backgroundColor: "#ffb14f",
  //     transform: "rotate(90deg)",
  //   },
  //   vertical: {
  //     width: "10px",
  //     height: "532px",
  //   },
  //   cardTitle: {
  //     top: "20px",
  //     left: "110px",
  //     position: "absolute",
  //     fontFamily: "Inter",
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: "60px",
  //     lineHeight: "77px",
  //     textAlign: "justify",
  //     color: "#23201a",
  //   },
  //   cardLine: {
  //     top: "72px",
  //     left: "475px",
  //     width: "290px",
  //     height: "1px",
  //     position: "absolute",
  //     background:
  //       "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
  //   },
  //   cardText: {
  //     width: "600px",
  //     height: "100px",
  //     top: "120px",
  //     left: "160px",
  //     position: "absolute",
  //     fontFamily: "Inter",
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     fontSize: "10px",
  //     lineHeight: "12px",
  //     textAlign: "justify",
  //     color: "#23201a",
  //   },
  //   verticalLine: {
  //     top: "410px",
  //     left: "1120px",
  //     width: "330px",
  //     height: "2px",
  //     position: "absolute",
  //     background:
  //       "linear-gradient(90deg, rgba(210,143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
  //     transform: "rotate(90deg)",
  //   },
  //   verticalDot: {
  //     top: "650px",
  //     left: "1280px",
  //     position: "absolute",
  //     width: "10px",
  //     height: "10px",
  //     background: "#977240",
  //     borderRadius: "5px",
  //   },
  // };

  return (
    <div id="backgroundImg" style={styles}>
      <Card />
      <ArrowDot />
      <Vertical />
    </div>
  );
};

export default App;

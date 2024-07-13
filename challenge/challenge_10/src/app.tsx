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
  return (
    <div id="backgroundImg" style={styles}>
      <Card />
      <ArrowDot />
      <Vertical />
    </div>
  );
};

export default App;

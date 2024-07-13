import React, { CSSProperties } from "react";

const App: React.FC = () => {
  const styleMaker = (element: HTMLElement | null, style: CSSProperties) => {
    if (element) {
      Object.assign(element.style, style);
    }
  };

  const styles: { [key: string]: CSSProperties } = {
    root: {
      margin: 0,
      padding: 0,
    },
    backgroundImg: {
      width: "100vw",
      height: "100vh",
      background:
        "url('https://s3-alpha-sig.figma.com/img/284a/a4b3/3854223ba1861a51428da5234a85d5aa?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRbsgffm~kBiYsHLUoiA5J6Y9nUesIQy5fvjUzeWwEhZAxJWDS8duD2IVTb5M1zB4VxYsKkT7CPr2RSilVmIKgRUw1uYD775Dl~p70wOd68IF2HzusIVg87RoxIkJipE2~7Uj9pSa0o5cAZkgAL7UcDk-BYviXLwZvwO0vrTBa7iR5UHPIeXnV3VOMeXvG24quW~xdYQJBa763BPTpyb1eorQbgpg5gMHehQxV1BDEgtqma7Jtnb3oWKEmW88-iKuBBshEOCut3EPsAkXF2LoSkBf2e6r1XllE0FBk8HIKGLFfboBiP3MuBGPykEqUnXOmR23~J5JhdAGbK6JXGZVw__')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    card: {
      top: "270px",
      left: "150px",
      width: "780px",
      height: "365px",
      borderRadius: "31px",
      border: "1px solid",
      borderImageSource:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(125, 114, 87, 0.5) 100%)",
      background:
        "linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)",
      boxShadow: "1px 4px 15.6px -5px #574C31",
      position: "absolute",
      backdropFilter: "blur(15px)",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "64px",
      lineHeight: "77px",
      textAlign: "justify",
      color: "#23201a",
    },
    arrowDot: {
      width: "23px",
      height: "40px",
      backgroundColor: "#ffb14f",
      transform: "rotate(90deg)",
    },
    vertical: {
      width: "10px",
      height: "532px",
    },
    cardTitle: {
      top: "20px",
      left: "110px",
      position: "absolute",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "60px",
      lineHeight: "77px",
      textAlign: "justify",
      color: "#23201a",
    },
    cardLine: {
      top: "72px",
      left: "475px",
      width: "290px",
      height: "1px",
      position: "absolute",
      background:
        "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
    },
    cardText: {
      width: "600px",
      height: "100px",
      top: "120px",
      left: "160px",
      position: "absolute",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "10px",
      lineHeight: "12px",
      textAlign: "justify",
      color: "#23201a",
    },
    verticalLine: {
      top: "410px",
      left: "1120px",
      width: "330px",
      height: "2px",
      position: "absolute",
      background:
        "linear-gradient(90deg, rgba(210,143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
      transform: "rotate(90deg)",
    },
    verticalDot: {
      top: "650px",
      left: "1280px",
      position: "absolute",
      width: "10px",
      height: "10px",
      background: "#977240",
      borderRadius: "5px",
    },
  };

  return (
    <div id="root" style={styleMaker(styles.root)}>
      <div id="backgroundImg">
        <div id="card" style={styleMaker(styles.card)}>
          <div id="card-container">
            <div>
              <h1 id="card-title" style={styleMaker(styles.cardTitle)}>
                INDENTATION
              </h1>
              <div id="card-line" style={styleMaker(styles.cardLine)}></div>
            </div>
            <p id="card-text" style={styleMaker(styles.cardText)}>
              Lorem ipsum dolor sit amet consectetur. A eu id mollis
              pellentesque tellus bibendum sagittis. Eu nunc eu sed nec nisi.
              Leo eget urna id congue fusce in venenatis sagittis id. Pretium
              egestas id morbi eget id commodo adipiscing. Orci vitae aliquam
              tincidunt vulputate consectetur netus facilisis facilisis nulla.
              Pellentesque blandit lacus mattis mauris facilisi blandit at
              pharetra. Nulla quis tellus in felis sagittis viverra viverra ac.
              Vestibulum quam dui amet cursus amet dictum vitae felis molestie.
              Malesuada eget pellentesque quis nec euismod. A nisi vel elit cras
              facilisis sed nunc egestas quis. Neque aliquam vitae facilisis
              blandit. Donec lacus nunc massa sed pellentesque nam eget gravida
              tortor. Dignissim ac nulla mi suspendisse viverra mollis rhoncus.
              Sed hendrerit risus nunc gravida pellentesque tellus a vel
              molestie. Condimentum massa ut porttitor mi. Elit nunc ut dictum
              feugiat mauris risus libero. Faucibus urna tellus scelerisque sit
              ac sed dui. Sit dictum facilisis tempor elementum morbi sapien
              egestas. In ultricies tincidunt vitae consequat volutpat nascetur
              rhoncus a ac. Quis pharetra neque ac vivamus tempor. Integer
              aliquet ac egestas nulla massa amet elit nec. Mauris ullamcorper
              amet lectus vitae est sagittis ut. Urna lacinia non massa velit et
              etiam erat neque sit. Lectus vulputate consequat faucibus mattis
              dol or eget. Faucibus enim hendrerit sagittis diam ridiculus.
              Nascetur vel eget mi purus ultrices vitae augue vel nunc. Faucibus
              sit elementum consequat tristique orci turpis in non sit. Nunc
              mattis risus tincidunt amet libero libero. Bibendum nunc tristique
              donec sagittis dictumst consequat. Amet urna in quisque consequat
              nisi lectus et tempor diam. Ultrices aliquam a volutpat arcu est.
              Semper cras ipsum lectus ut arcu ac. Netus eget quam varius
              pharetra at pulvinar orci. Lacus et porttitor arcu vitae sociis.
              Suspendisse tempus leo leo enim. Proin et nibh amet et
              sollicitudin a enim etiam lectus. Tincidunt euismod placerat ut
              amet. Pellentesque malesuada nunc suspendisse nulla ornare laoreet
              maecenas. Sed ut cilisis augue auctor. Sagittis ac sapien viverra
              ultricies non sed mauris interdum. Lorem non nec pellentesque
              imperdiet eget quis. Malesuada pulvinar turpis tortor eu mauris
              sed. Lectus laoreet augue mauris ut adipiscing ut nulla. Vitae
              nibh in neque curabitur. Tempus velit pellentesque cursus
              elementum faucibus massa maecenas. Aliquam ac in nulla etiam
              facilisi vitae amet. Ut aenean in sed eget blandit id morbi
              congue. Enim vitae nec blandit sed. Non facilisi neque eu vel.
            </p>
          </div>
        </div>
        <div id="arrow-dot" style={styleMaker(styles.arrowDot)}></div>
        <div id="vertical" style={styleMaker(styles.vertical)}>
          <div id="vertical-line" style={styleMaker(styles.verticalLine)}></div>
          <div id="vertical-dot" style={styleMaker(styles.verticalDot)}></div>
        </div>
      </div>
    </div>
  );
};

export default App;

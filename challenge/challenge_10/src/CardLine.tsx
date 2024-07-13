import { CSSProperties } from "react";

const CardLine: React.FC = () => {
  let styles: CSSProperties = {
    top: "72px",
    left: "475px",
    width: "290px",
    height: "1px",
    position: "absolute",
    background:
      "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
  };
  return <div style={styles}></div>;
};

export default CardLine;

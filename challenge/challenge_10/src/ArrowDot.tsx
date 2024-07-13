import { CSSProperties } from "react";

const ArrowDot: React.FC = () => {
  let styles: CSSProperties = {
    width: "23px",
    height: "40px",
    backgroundColor: "#ffb14f",
    transform: "rotate(90deg)",
  };
  return <div style={styles}></div>;
};

export default ArrowDot;

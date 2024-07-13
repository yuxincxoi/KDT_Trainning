import { CSSProperties } from "react";

const VerticalLine: React.FC = () => {
  let styles: CSSProperties = {
    top: "410px",
    left: "1120px",
    width: "330px",
    height: "2px",
    position: "absolute",
    background:
      "linear-gradient(90deg, rgba(210,143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
    transform: "rotate(90deg)",
  };
  return <div style={styles}></div>;
};

export default VerticalLine;

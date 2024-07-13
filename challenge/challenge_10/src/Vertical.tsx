import VerticalLine from "./VerticalLine";
import VerticalDot from "./VerticalDot";
import { CSSProperties } from "react";

const Vertical: React.FC = () => {
  let styles: CSSProperties = {
    top: "650px",
    left: "1280px",
    position: "absolute",
    width: "10px",
    height: "10px",
    background: "#977240",
    borderRadius: "5px",
  };
  return (
    <div style={styles}>
      <VerticalLine />
      <VerticalDot />
    </div>
  );
};

export default Vertical;

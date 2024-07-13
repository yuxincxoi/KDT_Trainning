import { CSSProperties } from "react";

const CardTitle: React.FC = () => {
  let styles: CSSProperties = {
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
  };
  return <h1 style={styles}>INDENTATION</h1>;
};

export default CardTitle;

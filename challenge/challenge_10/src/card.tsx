import CardTitle from "./CardTitle";
import CardLine from "./CardLine";
import CardText from "./CardText";
import { CSSProperties } from "react";

const Card: React.FC = () => {
  let styles: CSSProperties = {
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
  };
  return (
    <div style={styles}>
      <div>
        <CardTitle />
        <CardLine />
      </div>
      <CardText />
    </div>
  );
};

export default Card;

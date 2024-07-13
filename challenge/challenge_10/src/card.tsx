import CardTitle from "./CardTitle";
import CardLine from "./CardLine";
import CardText from "./CardText";

const Card: React.FC = () => {
  return (
    <div>
      <div>
        <CardTitle />
        <CardLine />
      </div>
      <CardText />
    </div>
  );
};

export default Card;

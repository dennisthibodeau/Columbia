import { useState } from "react";
import { Geography } from "react-simple-maps";
import trees from "../assets/trees.jpeg";

const Geo = ({ geo }) => {
  const [color, setColor] = useState(true);

  const myToggle = () => {
    setColor(!color);
  };

  return (
    <Geography
      key={geo.rsmKey}
      stroke="white"
      geography={geo}
      fill={color ? "#f0f0f0" : "forestgreen"}
      onClick={myToggle}
    />
  );
};

export default Geo;

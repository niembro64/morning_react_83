import React from "react";
import { useParams } from "react-router-dom";

const Repeater = (props) => {
  const { word } = useParams();
  return (
    <div>
      {word}
      <h1>repeater page here</h1>
      <h1>repeater page here</h1>
      <h1>repeater page here</h1>
      <h1>repeater page here</h1>
      <h1>repeater page here</h1>
      <h1>repeater page here</h1>
    </div>
  );
};

export default Repeater;

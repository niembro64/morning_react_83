import React from "react";
import { useParams } from "react-router-dom";

const Repeater = (props) => {
  const { word } = useParams();
  const { num } = useParams();
  return (
    <div>
      <h1>{word}</h1>
      <h1>{word}</h1>
      <h1>{word}</h1>
      <h1>{num}</h1>
      <h1>{num}</h1>
      <h1>{num}</h1>
    </div>
  );
};

export default Repeater;

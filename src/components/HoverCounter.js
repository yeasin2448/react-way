import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div className="bg-white max-w-[500px] mx-auto drop-shadow-md rounded-md p-4">
      <h4
        onMouseOver={incrementCount}
        className="text-xl font-sans font-bold text-black"
      >
        Hello I am Yeasin arafat, I'm exist {count} time
      </h4>
    </div>
  );
}

export default withCounter(HoverCounter);

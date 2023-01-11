import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div className="bg-white max-w-[500px] mx-auto text-center p-4 rounded-md drop-shadow-md my-6">
      <button
        type="button"
        onClick={incrementCount}
        className="bg-purple-500 text-white text-base font-sans py-2 px-4 rounded-md"
      >
        Click {count} time
      </button>
    </div>
  );
}

export default withCounter(ClickCounter);

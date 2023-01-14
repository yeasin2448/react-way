import React from "react";

function HoverCounter ({ count, incrementCount, theme }) {
    const style = theme === "dark" ? { backgroundColor : '#000', color : '#fff' } : null;
    return (
      <div className="bg-white max-w-[500px] mx-auto drop-shadow-md rounded-md p-4">
        <h4
          onMouseOver={incrementCount}
          className="text-xl font-sans font-bold text-black"
          style={style}
        >
          Hello I am Yeasin arafat, I'm exist {count} time
        </h4>
      </div>
    );
}

export default HoverCounter;

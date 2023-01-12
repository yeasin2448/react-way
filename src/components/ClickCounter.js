import React from "react";

class ClickCounter extends React.Component{
  render () {
    const { count, incrementCount } = this.props
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
}

export default ClickCounter;

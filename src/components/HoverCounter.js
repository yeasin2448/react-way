import React from "react";

class HoverCounter extends React.Component {
  state = {
    count : 0,
  }
  incrementCount = () => {
    this.setState((prevState) => ({ count : prevState.count + 1 }))
  }
  render () {
    const { count } = this.state;
    return (
      <div className="bg-white max-w-[500px] mx-auto drop-shadow-md rounded-md p-4">
        <h4
          onMouseOver={this.incrementCount}
          className="text-xl font-sans font-bold text-black"
        >
          Hello I am Yeasin arafat, I'm exist {count} time
        </h4>
      </div>
    );
  }
}

export default HoverCounter;

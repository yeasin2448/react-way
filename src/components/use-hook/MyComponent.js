import React from "react";

class MyComponent extends React.Component {
  state = {
    counts: 0,
    date: new Date(),
  };
  componentDidMount() {
    const { counts } = this.state;
    document.title = `Clicked ${counts} times`;
    setInterval(this.tick, 1000)
  }

  componentDidUpdate() {
    const { counts } = this.state;
    document.title = `Clicked ${counts} times`;
  }

  addClick = () => {
    this.setState((counts) => ({
      counts: counts + 1,
    }));
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.props;
    return (
      <div className="bg-white p-3 rounded-md shadow-md">
        <p>Time : {date.toLocaleTimeString()}</p>
        <button
          type="button"
          onClick={this.addClick}
          className="bg-sky-300 py-2 px-4 rounded-md text-white"
        >
          click
        </button>
      </div>
    );
  }
}

export default MyComponent;

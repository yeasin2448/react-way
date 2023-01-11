import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "en-ES" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Hello Clock! {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show={false} enable={true} />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show={true} enable={false} />
        )}
      </div>
    );
  }
}

export default Clock;

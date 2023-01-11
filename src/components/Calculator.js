import React from "react";
import { convert, toCelcius, toFahrenheit } from "../lib/converter";
import Boilingverdict from "./Boilingverdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
  state = {
    temperature : '',
    scale : 'c'
  }
  tempHandleChange = (e, scale) => {
    this.setState({
      temperature : e.target.value,
      scale,
    })
  }
  render() {
    const {temperature, scale} = this.state;
    const celcius = scale === 'f' ? convert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div className="flex flex-col gap-5 bg-white  p-3 rounded-md shadow-theme_shadow max-w-[500px] mx-auto my-20">
        <h4 className="text-black text-center text-lg font-bold font-serif">Temperature Form</h4>
        <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.tempHandleChange}/>
        <TemperatureInput scale="f" temperature={(fahrenheit)} onTemperatureChange={this.tempHandleChange} />
        <Boilingverdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;

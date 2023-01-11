import React from "react";

const scaleName = {
    c : 'Celsius',
    f : 'Fahrenheit'
}

function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  return (
    <fieldset className="">
      <div className="relative">
        <legend
          className="text-sm absolute -top-3 left-3 bg-white px-2
            "
        >
          Enter temperature in {scaleName[scale]}:
        </legend>
        <input
          type="text"
          className="border border-black border-opacity-50 h-10 p-2 w-full rounded-md"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </div>
    </fieldset>
  );
};

export default TemperatureInput;

//  state = {
//    temperature: "",
//  };

//  onTemperatureChange = (e) => {
//    this.setState({
//      temperature: e.target.value,
//    });
//  };
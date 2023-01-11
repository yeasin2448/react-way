import React from "react";

class From extends React.Component {
  state = {
    title: "javaScript",
    text: "JavaScript is awesome",
    libarary : "React",
    isAwesome : true
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        libarary: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log(e.target.type);
      console.log("Nothis heaare");
    }
  };

  handleSubmit = (e) => {
    const { title, text, libarary, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, libarary, isAwesome);
  };

  render() {
    const { title, text, libarary, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="bg-white max-w-[500px] mx-auto my-10 shadow-theme_shadow rounded-md p-5 flex flex-col gap-3">
          <h2 className="text-black xl:text-xl text-lg font-sans font-medium pb-3 text-center">
            My Form
          </h2>
          <div className="input_group">
            <input
              type="text"
              className="bg-white shadow-theme_shadow text-sm text-black text-opacity-70 w-full h-10 rounded-md p-2"
              placeholder="Write Title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="input_group h-16">
            <textarea
              rows="2"
              className="bg-white shadow-theme_shadow text-sm text-black text-opacity-70 w-full rounded-md p-2"
              placeholder="Write some text"
              value={text}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input_group">
            <select className="bg-white shadow-theme_shadow text-sm text-black text-opacity-70 rounded-md w-full h-10 p-2" value={libarary} onChange={this.handleChange}>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <div className="input_group flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5 rounded" checked={isAwesome} onChange={this.handleChange}  />
             <label>Accept me!</label>
          </div>
          <div className="input_btn">
            <input className="bg-gradient-to-r from-sky-400 to-sky-500 w-full py-2 px-4 rounded-md text-white text-sm cursor-pointer" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default From;

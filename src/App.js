import React from "react";
import ClickCounter from "./components/ClickCounter";
import ThemeContext from "./components/context/themeContext";
import Counter from "./components/render-props/Counter";
import Section from "./components/Section";
import Count from "./components/use-hook/Count";
import Todo from "./components/use-hook/Todo";

class App extends React.Component {
  // const quantites = [1, 2, 3]
  state = {
    theme: "dark",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        } else {
          return {
            theme: "dark",
          };
        }
      });
    },
  };
  render() {
    return (
      <div>
        {/* <ClockList quantites={quantites}/> */}
        {/* <From /> */}
        {/* <Calculator /> */}
        {/* <Emoji>
            {({ addEmoji }) => (
                <Bracket>
                    {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            )}
      </Emoji> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <User name={(isLogdIn) => isLogdIn ? "farin" : "Guest" }/> */}
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={ this.state }>
          <Section />
        </ThemeContext.Provider>
        <Todo />
        <Count />
      </div>
    );
  }
}

export default App;

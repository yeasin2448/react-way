import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/render-props/Counter";
import Section from "./components/Section";

class App extends React.Component {
  // const quantites = [1, 2, 3]
  state = {
    theme : 'dark'
  }
 render() {
  const { theme } = this.state;
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
      <Section theme={ theme } />
    </div>
  );
 }
}

export default App;

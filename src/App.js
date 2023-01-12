import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/render-props/Counter";

function App() {
  // const quantites = [1, 2, 3]
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
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;

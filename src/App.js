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
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;

import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

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
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;

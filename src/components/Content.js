import HoverCounter from "./HoverCounter";
import Counter from "./render-props/Counter";

function Content({ theme }) {
  return (
    <div>
      <h1 className="text-black text-lg font-medium text-center">
        This is a content
      </h1>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} theme={ theme } />
        )}
      </Counter>
    </div>
  );
}

export default Content;

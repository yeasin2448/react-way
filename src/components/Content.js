import { useContext } from 'react';
import themeContext from "./context/themeContext";
import HoverCounter from "./HoverCounter";
import Counter from "./render-props/Counter";

function Content() {
  const context = useContext(themeContext);
  const { theme, switchTheme } = context
  return (
    <div>
      <h1 className="text-black text-lg font-medium text-center">
        This is a content
      </h1>
      <Counter>
        {(counter, incrementCount) => (
              <HoverCounter
                count={counter}
                incrementCount={incrementCount}
                theme={theme}
                switchTheme={switchTheme}
              />
        )}
      </Counter>
    </div>
  );
}

export default Content;

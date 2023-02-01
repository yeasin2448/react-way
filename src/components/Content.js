import ThemeContext from "./context/themeContext";
import HoverCounter from "./HoverCounter";
import Counter from "./render-props/Counter";

function Content() {
  return (
    <div>
      <h1 className="text-black text-lg font-medium text-center">
        This is a content
      </h1>
      <Counter>
        {(counter, incrementCount) => (
          <ThemeContext.Consumer>
            {({ theme, switchTheme }) => (
              <HoverCounter
                count={counter}
                incrementCount={incrementCount}
                theme={theme}
                switchTheme={switchTheme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}

export default Content;

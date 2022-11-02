import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    }
    return true;
  }
  render() {
    const { change, locale } = this.props;
    return (
      <button type="type" onClick={() => change(locale)}>
        Click here
      </button>
    );
  }
}

export default Button;

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
    const { change, locale, show, enable } = this.props;
    if(!enable) return null;
    return (
      <>
        <button type="type" onClick={() => change(locale)}>
          {locale === "en-US" ? "Change clock" : "ঘড়ি পরিবর্তন করুন "}
        </button>
        {show && <p>Hello Bro</p>}
      </>
    );
  }
}

export default Button;

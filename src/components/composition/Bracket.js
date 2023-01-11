import React from 'react';

class Emoji extends React.Component {
    addBracket = (text) => `[ ${text} ]`;
    render () {
        return this.props.children({addBracket: this.addBracket})
    }
}

export default Emoji;
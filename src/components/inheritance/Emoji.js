import React from "react";


class Emoji extends React.Component {
    adEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
    render(override) {
        let text = "I am the emoji component"
        if(override) text = override;
        return (
            <div>{text}</div>
        )
    }
}

export default Emoji;
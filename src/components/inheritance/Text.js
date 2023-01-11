import Emoji from "./Emoji";

class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor (props) {
        super(props);
    }
    render() {
        const decoreatedText = this.adEmoji('I love Javascript', '💜');
        return super.render(decoreatedText);
    }
}
export default Text
function Text({ addEmoji, addBracket }) {
  let text = "I rely love javascript language";
  if(addEmoji) {
    text = addEmoji(text, "💜");
  }
  if(addBracket) {
    text = addBracket(text);
  }

  return <div> {text} </div>;
}
export default Text;
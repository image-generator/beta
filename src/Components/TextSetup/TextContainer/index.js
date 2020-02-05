import React from 'react';
import ColorPicker from 'rc-color-picker';
import Input from '../../General/Input';

const TextContainer = ({ index, texts, setTexts, textColor, onChangeTextColor, text }) => {

  const handleColor = (color) => {
    const newText = texts;
    newText[index].color = color.color;
    setTexts([ ...newText ]);
  }

  const handleText = (event) => {
    const newText = texts;
    newText[index].title = event.target.value;
    setTexts([ ...newText ]);
  };

  return (
    <>
      <Input
        index={index}
        value={text}
        onChange={event => handleText(event)}
      />
      <ColorPicker
        color={textColor}
        alpha={100}
        onChange={handleColor}
        placement="bottomLeft"
      />
    </>
  );
}

export default TextContainer;
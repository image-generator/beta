import React from 'react';
import ColorPicker from 'rc-color-picker';
import Input from '../../General/Input';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Tooltip } from '@material-ui/core';
import IconTextColor from '@material-ui/icons/FormatColorText';
import IconBgColor from '@material-ui/icons/FormatColorFill';


const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  setup: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  slider: {
    width: '100%',
    marginLeft: 10,
  },
  icon: {
    fontSize: 15,
    marginRight: 7,
    marginTop: -2,
  }
});

const TextContainer = ({ index, text, color, background, texts, setTexts }) => {
  const classes = useStyles();

  const handleTextColor = (color) => {
    const newText = texts;
    newText[index].color = color.color;
    setTexts([ ...newText ]);
  };

  const handleBackgroundColor = (color) => {
    const newText = texts;
    newText[index].background = color.color;
    setTexts([ ...newText ]);
  };

  const handleText = (event) => {
    const newText = texts;
    newText[index].title = event.target.value;
    setTexts([ ...newText ]);
  };

  const handleSize = (event, fontSize) => {
    const newText = texts;
    newText[index].fontSize = fontSize;
    setTexts([ ...newText ]);
  };

  const handlePaddingVertical = (event, direction) => {
    const newText = texts;
    newText[index].paddingTop = `${direction}px`;
    newText[index].paddingBottom = `${direction}px`;
    setTexts([ ...newText ]);
  };

  const handlePaddingHorizontal = (event, direction) => {
    const newText = texts;
    newText[index].paddingLeft = `${direction}px`;
    newText[index].paddingRight = `${direction}px`;
    setTexts([ ...newText ]);
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Input
        index={index}
        value={text}
        onChange={event => handleText(event)}
      />
      <div className={classes.setup}>
        <IconTextColor className={classes.icon} color="primary" />
        <ColorPicker
          color={color}
          alpha={100}
          onChange={handleTextColor}
          placement="bottomLeft"
        />
        <div className={classes.slider}>
          <Slider
            min={14}
            step={2}
            max={44}
            defaultValue={16}
            ValueLabelComponent={ValueLabelComponent}
            onChange={handleSize}
            aria-label="custom thumb label"
            />
        </div>
      </div>
      <div className={classes.setup}>
        <IconBgColor className={classes.icon} color="primary" />
        <ColorPicker
          color={background}
          alpha={100}
          onChange={handleBackgroundColor}
          placement="bottomLeft"
        />
        <div className={classes.slider}>
          <Slider
            min={0}
            step={1}
            max={50}
            defaultValue={8}
            ValueLabelComponent={ValueLabelComponent}
            onChange={handlePaddingVertical}
            aria-label="custom thumb label"
            />
        </div>
        <div className={classes.slider}>
          <Slider
            min={0}
            step={1}
            max={50}
            defaultValue={16}
            ValueLabelComponent={ValueLabelComponent}
            onChange={handlePaddingHorizontal}
            aria-label="custom thumb label"
            />
        </div>
      </div>
      
    </div>
  );
}

export default TextContainer;
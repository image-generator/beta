import React from 'react';
import ColorPicker from 'rc-color-picker';
import { makeStyles } from '@material-ui/core/styles';
import {
  Select, MenuItem, IconButton, OutlinedInput,
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Bold from '@material-ui/icons/FormatBold';
import Italic from '@material-ui/icons/FormatItalic';
import Underline from '@material-ui/icons/FormatUnderlined';
import Uppercase from '@material-ui/icons/TextFields';
import Input from '../../General/Input';
import TextFont from '../TextFont';
import IconAction from '../../General/IconAction';

import styles from './styles';

const useStyles = makeStyles(styles);

const TextContainer = ({
  index, text, color, texts, setTexts,
}) => {
  const classes = useStyles();

  const [formats, setFormats] = React.useState(() => ['bold']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleTextColor = (color) => {
    const newText = texts;
    newText[index].color = color.color;
    setTexts([...newText]);
  };

  const handleText = (event) => {
    const newText = texts;
    newText[index].title = event.target.value;
    setTexts([...newText]);
  };

  const handleFontSize = (event) => {
    const newTexts = texts;
    newTexts[index].fontSize = event.target.value;
    setTexts([...newTexts]);
  };

  const handleFormatText = (format) => {
    const newTexts = texts;
    if (format === 'bold') {
      newTexts[index].fontWeight = newTexts[index].fontWeight === 'normal' ? 'bold' : 'normal';
    } else if (format === 'italic') {
      newTexts[index].fontStyle = newTexts[index].fontStyle === 'normal' ? 'italic' : 'normal';
    } else if (format === 'underline') {
      newTexts[index].textDecoration = newTexts[index].textDecoration === 'none' ? 'underline' : 'none';
    } else if (format === 'uppercase') {
      newTexts[index].textTransform = newTexts[index].textTransform === 'none' ? 'uppercase' : 'none';
    }
    setTexts([...newTexts]);
  };

  const handleRemove = () => {
    const newTexts = texts;
    newTexts.splice(index, 1);
    setTexts([...newTexts]);
  };


  return (
    <div className={classes.wrapper}>
      <div className={classes.inputWrapper}>
        <Input
          index={index}
          value={text}
          onChange={(event) => handleText(event)}
        />
        <IconButton
          className={classes.closeButton}
          aria-label="remove"
          onClick={handleRemove}
        >
          <Delete className={classes.icon} />
        </IconButton>
      </div>
      <div className={classes.setup}>
        <ColorPicker
          color={color}
          className={classes.jairo}
          alpha={100}
          onChange={handleTextColor}
          placement="bottomLeft"
        />
        <Select
          id="font-size"
          value={texts[index].fontSize}
          onChange={handleFontSize}
          input={<OutlinedInput />}
          className={classes.selectFont}
          MenuProps={{
            classes: {
              paper: classes.paper,
            },
          }}
        >
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={38}>38</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={44}>44</MenuItem>
        </Select>
        <div className={classes.fontWrapper}>
          <TextFont texts={texts} setTexts={setTexts} index={index} />
        </div>
        <div className={classes.formatWrapper}>
          <IconAction action={() => handleFormatText('bold')}>
            <Bold color={texts[index].fontWeight === 'bold' ? 'primary' : 'inherit'} className={classes.icon} />
          </IconAction>
          <IconAction action={() => handleFormatText('italic')}>
            <Italic color={texts[index].fontStyle === 'italic' ? 'primary' : 'inherit'} className={classes.icon} />
          </IconAction>
          <IconAction action={() => handleFormatText('underline')}>
            <Underline
              color={
                texts[index].textDecoration === 'underline'
                  ? 'primary'
                  : 'inherit'
              }
              className={classes.icon}
            />
          </IconAction>
          <IconAction action={() => handleFormatText('uppercase')}>
            <Uppercase
              color={
                texts[index].textTransform === 'uppercase'
                  ? 'primary'
                  : 'inherit'
              }
              className={classes.icon}
            />
          </IconAction>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;

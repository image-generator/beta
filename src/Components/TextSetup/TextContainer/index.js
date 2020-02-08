import React from "react";
import ColorPicker from "rc-color-picker";
import Input from "../../General/Input";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  Select,
  MenuItem,
  IconButton,
  OutlinedInput
} from "@material-ui/core";
import IconTextColor from "@material-ui/icons/FormatColorText";
import Bold from "@material-ui/icons/FormatBold";
import Italic from "@material-ui/icons/FormatItalic";
import Underline from "@material-ui/icons/FormatUnderlined";
import "./styles.css";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15
  },
  setup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  slider: {
    width: "100%",
    marginLeft: 10
  },
  icon: {
    fontSize: 15
  },
  paper: {
    maxHeight: "calc(50% - 96px)"
  }
});

const TextContainer = ({ index, text, color, texts, setTexts }) => {
  const classes = useStyles();

  const [formats, setFormats] = React.useState(() => ["bold"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleTextColor = color => {
    const newText = texts;
    newText[index].color = color.color;
    setTexts([...newText]);
  };

  const handleText = event => {
    const newText = texts;
    newText[index].title = event.target.value;
    setTexts([...newText]);
  };

  const handleFontSize = event => {
    const newTexts = texts;
    newTexts[index].fontSize = event.target.value;
    setTexts([...newTexts]);
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  }
  return (
    <div className={classes.wrapper}>
      <Input index={index} value={text} onChange={event => handleText(event)} />
      <div className={classes.setup}>
        <ColorPicker
          color={color}
          alpha={100}
          onChange={handleTextColor}
          placement="bottomLeft"
        />
        <Select
          id="font-size"
          value={texts[index].fontSize}
          onChange={handleFontSize}
          input={<OutlinedInput />}
          className="selectFont"
          MenuProps={{
            classes: {
              paper: classes.paper
            }
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
        <div className="formatWrapper">
          <IconButton aria-label="bold">
            <Bold className={classes.icon} />
          </IconButton>
          <IconButton aria-label="italic">
            <Italic className={classes.icon} />
          </IconButton>
          <IconButton aria-label="underline">
            <Underline className={classes.icon} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;

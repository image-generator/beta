import React, { useState } from "react";
import { Popover, IconButton } from "@material-ui/core";
import FontDownload from "@material-ui/icons/FontDownload";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import fonts from "../../../config/fonts";
import shortid from "shortid";
import IconAction from "../../General/IconAction";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  fontWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  opacityWrapper: {
    minWidth: 80
  },
  icon: {
    fontSize: 15
  },
  iconPopover: {
    fontSize: 20
  },
  closeButton: {
    marginRight: -15
  },
  paper: {
    maxHeight: 250
  },
  list: {
    padding: "10px 15px",
    listStyle: "none",
    margin: 0
  },
  item: {
    cursor: "pointer",
    transition: "backgroundColor 0.2s",
    "&:hover": {
      backgroundColor: "#efefef"
    }
  }
});

const TextFont = ({ index, texts, setTexts }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSelectFont = font => {
    const newTexts = texts;
    newTexts[index].fontFamily = font.font;
    setTexts([...newTexts]);
    handleClose();
  };

  return (
    <>
      <IconAction action={handleClick}>
        <FontDownload className={classes.icon} />
        <ArrowDropDownIcon className={classes.icon} />
      </IconAction>
      <Popover
        classes={{ paper: classes.paper }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <div className={classes.fontWrapper}>
          <ul className={classes.list}>
            {fonts.map(font => (
              <li
                key={shortid.generate()}
                className={classes.item}
                style={{ fontFamily: font.font }}
                onClick={() => handleSelectFont(font)}
              >
                {font.font}
              </li>
            ))}
          </ul>
        </div>
      </Popover>
    </>
  );
};

export default TextFont;

import React, { useState } from "react";
import { Popover, IconButton } from "@material-ui/core";
import FontDownload from "@material-ui/icons/FontDownload";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  shapeWrapper: {
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
  }
});

const TextFont = () => {
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

  return (
    <>
      <IconButton aria-label="bold" onClick={handleClick}>
        <FontDownload className={classes.icon} />
      </IconButton>
      <Popover
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
        <div className={classes.shapeWrapper}></div>
      </Popover>
    </>
  );
};

export default TextFont;

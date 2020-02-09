import React, { useState } from "react";
import ColorPicker from "rc-color-picker";
import Square from "@material-ui/icons/CropDin";
import Circle from "@material-ui/icons/RadioButtonUnchecked";
import Delete from "@material-ui/icons/Delete";
import AspectRatio from "@material-ui/icons/AspectRatio";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Slider, Popover } from "@material-ui/core";

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

const ShapeContainer = ({ index, shapes, setShapes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleShapeColor = color => {
    const newShapes = shapes;
    newShapes[index].background = color.color;
    setShapes([...newShapes]);
  };

  const handleShapeOpacity = (event, newValue) => {
    const newShapes = shapes;
    newShapes[index].opacity = newValue;
    setShapes([...newShapes]);
  };

  const handleRemove = () => {
    let newShapes = shapes;
    newShapes.splice(index, 1);
    setShapes([...newShapes]);
  };

  const handleShape = (event, format) => {
    const newShapes = shapes;
    if (format === "square") {
      if (newShapes[index].square) {
        return null;
      } else {
        newShapes[index].circle = false;
        newShapes[index].square = true;
      }
    } else if (format === "circle") {
      if (newShapes[index].circle) {
        return null;
      } else {
        newShapes[index].square = false;
        newShapes[index].circle = true;
      }
    }
    setShapes([...newShapes]);
    handleClose();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.wrapper}>
      <ColorPicker
        color={shapes[index].background}
        alpha={100}
        onChange={handleShapeColor}
        placement="bottomLeft"
      />
      <IconButton
        aria-describedby={id}
        aria-label="remove"
        onClick={handleClick}
        color="primary"
      >
        <AspectRatio className={classes.iconPopover} />
        <ArrowDropDown className={classes.icon} />
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
        <div className={classes.shapeWrapper}>
          <IconButton
            color={shapes[index].square ? "primary" : "default"}
            aria-label="square"
            onClick={event => handleShape(event, "square")}
          >
            <Square className={classes.icon} />
          </IconButton>
          <IconButton
            color={shapes[index].circle ? "primary" : "default"}
            aria-label="circle"
            onClick={event => handleShape(event, "circle")}
          >
            <Circle className={classes.icon} />
          </IconButton>
        </div>
      </Popover>
      <div className={classes.opacityWrapper}>
        <Slider
          value={shapes[index].opacity}
          min={0}
          step={0.1}
          max={1}
          onChange={handleShapeOpacity}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider"
        />
      </div>
      <IconButton
        className={classes.closeButton}
        aria-label="remove"
        onClick={handleRemove}
      >
        <Delete className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default ShapeContainer;

import React from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "../../../config/ItemTypes";

const Text = ({
  hideSourceOnDrag,
  children,
  id,
  left,
  top,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  textDecoration
}) => {
  const style = {
    position: "absolute",
    cursor: "move",
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    textDecoration: textDecoration
  };
  console.log("style", style);

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  );
};

export default Text;

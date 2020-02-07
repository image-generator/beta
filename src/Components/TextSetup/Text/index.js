import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../../../config/ItemTypes';

const Text = ({ id, left, top, hideSourceOnDrag, children, color, background, fontSize, paddingTop, paddingLeft }) => {

  const style = {
    position: 'absolute',
    backgroundColor: background,
    color: color,
    paddingTop: paddingTop,
    paddingBottom: paddingTop,
    paddingLeft: paddingLeft,
    paddingRight: paddingLeft,
    cursor: 'move',
    fontSize: fontSize,
    transition: 'font-size 0.1s'
  };

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }

  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  );
};

export default Text;

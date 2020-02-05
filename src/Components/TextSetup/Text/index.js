import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from '../../../config/ItemTypes'

const Text = ({ id, left, top, hideSourceOnDrag, children, color, background, fontSize }) => {

  const style = {
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: background,
    color: color,
    padding: '0.5rem 1rem',
    cursor: 'move',
    fontSize: fontSize,
  }

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  )
}
export default Text;

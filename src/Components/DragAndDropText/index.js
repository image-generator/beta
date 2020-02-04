import React, { useState } from 'react';

import { useDrop } from 'react-dnd'
import ItemTypes from '../../config/ItemTypes'
import Box from '../Box'
import update from 'immutability-helper'

import './styles.css';

const DragAndDropText = ({ boxes, setBoxes }) => {
  const [hideSourceOnDrag] = useState(true)

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  return (
    <div className="dnd">
      <div ref={drop} className="dnsCanvas">
        {boxes.map((key, index) => {
          const { id, left, top, title } = boxes[index]
          return (
            <Box
              key={id}
              id={index}
              left={left}
              top={top}
              hideSourceOnDrag={hideSourceOnDrag}
            >
              {title}
            </Box>
          )
        })}
      </div>
    </div>
  )
}

export default DragAndDropText;

import React, { useState } from 'react';

import { useDrop } from 'react-dnd'
import ItemTypes from '../../../config/ItemTypes'
import Text from '../Text'
import update from 'immutability-helper'

import './styles.css';

const DragAndDropText = ({ texts, setTexts }) => {
  const [hideSourceOnDrag] = useState(true)

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      handleMoveText(item.id, left, top)
      return undefined
    },
  })
  const handleMoveText = (id, left, top) => {
    setTexts(
      update(texts, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  return (
    <div className="dnd">
      <div ref={drop} className="dnsCanvas">
        {texts.map((key, index) => {
          const { id, left, top, title, color, background, fontSize, paddingTop, paddingLeft } = texts[index]
          return (
            <Text
              key={id}
              id={index}
              left={left}
              top={top}
              hideSourceOnDrag={hideSourceOnDrag}
              color={color}
              background={background}
              fontSize={fontSize}
              paddingTop={paddingTop}
              paddingBottom={paddingTop}
              paddingLeft={paddingLeft}
              paddingRight={paddingLeft}
            >
              {title}
            </Text>
          )
        })}
      </div>
    </div>
  )
}

export default DragAndDropText;

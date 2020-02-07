import React, { useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import ItemTypes from "../../../config/ItemTypes";

import Text from "../Text";
import "./styles.css";

const DragAndDropText = ({ texts, setTexts }) => {
  const [hideSourceOnDrag] = useState(true);

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      handleMoveText(item.id, left, top);
      return undefined;
    }
  });
  const handleMoveText = (id, left, top) => {
    setTexts(
      update(texts, {
        [id]: {
          $merge: { left, top }
        }
      })
    );
  };

  return (
    <div className="dnd">
      <div ref={drop} className="dnsCanvas">
        {texts.map((key, index) => {
          const {
            id,
            left,
            top,
            title,
            color,
            fontSize,
            fontWeight,
            fontStyle,
            textDecoration
          } = texts[index];
          return (
            <Text
              key={id}
              hideSourceOnDrag={hideSourceOnDrag}
              id={index}
              left={left}
              top={top}
              color={color}
              fontSize={fontSize}
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            >
              {title}
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default DragAndDropText;

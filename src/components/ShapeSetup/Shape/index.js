import React from "react";
import { Rnd } from "react-rnd";

const Shape = ({ shapes, setShapes }) => {
  return (
    <>
      {shapes.map((shape, index) => (
        <Rnd
          style={{
            background: shape.background,
            opacity: shape.opacity,
            borderRadius: shape.circle ? "50%" : "0"
          }}
          key={shape.id}
          size={{
            width: shape.width,
            height: shape.height
          }}
          position={{
            x: shape.x,
            y: shape.y
          }}
          onDragStop={(e, d) => {
            const newRnds = shapes;
            newRnds[index].x = d.x;
            newRnds[index].y = d.y;
            setShapes([...newRnds]);
          }}
          onResize={(e, direction, ref, delta, position) => {
            const newRnds = shapes;
            newRnds[index].width = ref.offsetWidth;
            newRnds[index].height = ref.offsetHeight;
            setShapes([...newRnds]);
          }}
          lockAspectRatio={shape.circle ? true : false}
        />
      ))}
    </>
  );
};

export default Shape;

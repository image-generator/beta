import React, { useEffect } from "react";
import { Rnd } from "react-rnd";

const Text = ({ texts, setTexts }) => {
  // Disable rezise on text (lib havent disable to this, only to drag)
  useEffect(() => {
    const id = document.getElementsByClassName("text-span-remove");
    if (id.length > 0) {
      if (id[id.length - 1].getElementsByTagName("span").length === 1) {
        id[id.length - 1].getElementsByTagName("span")[0].remove();
      }
    }
  }, [texts]);

  return (
    <>
      {texts.map((text, index) => (
        <Rnd
          className="text-span-remove"
          style={{
            color: text.color,
            fontSize: text.fontSize,
            fontWeight: text.fontWeight,
            fontStyle: text.fontStyle,
            textDecoration: text.textDecoration,
            fontFamily: text.fontFamily
          }}
          key={text.id}
          position={{
            x: text.x,
            y: text.y
          }}
          onDragStop={(e, d) => {
            const newTexts = texts;
            newTexts[index].x = d.x;
            newTexts[index].y = d.y;
            setTexts([...newTexts]);
          }}
        >
          {text.title}
        </Rnd>
      ))}
    </>
  );
};

export default Text;

import React from 'react';

const ColorPicker = () => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleOpen = () => {
      setDisplayColorPicker(!displayColorPicker);
    };

    const handleOpenColorPicker = () => {
      setDisplayColorPicker(!displayColorPicker);
    };

  return (
    <div onClose={handleOpen}>
      <div className="swatch" onClick={handleOpenColorPicker}>
        <div className="color" style={{ background: panel.filter ? filterColor : '#e0e0e0' }} />
      </div>
      {displayColorPicker ? (
        <div className="popover">
          <div className="cover" onClick={handleCloseColorPicker} />
          <ChromePicker
            color={filterColor}
            onChangeComplete={handleFilterColor}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;
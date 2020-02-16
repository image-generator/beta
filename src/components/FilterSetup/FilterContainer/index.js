import React from 'react';
import { Switch, Slider, Tooltip } from '@material-ui/core';
import ColorPicker from 'rc-color-picker';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 25,
  },
  switch: {
    marginLeft: -12,
    marginRight: 5,
  },
});

const FilterContainer = ({
  panel,
  setPanel,
  filterColor,
  setFilterColor,
  filterOpacity,
  setFilterOpacity,
}) => {
  const classes = useStyles();

  const handleColor = (color) => {
    setFilterColor(color.color);
  };

  const handleOpacity = (event, newValue) => {
    setFilterOpacity(newValue);
  };

  const handlePanel = (event) => {
    setPanel({ ...panel, filter: event.target.checked });
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Switch
            classes={{ root: classes.switch }}
            checked={panel.filter}
            onChange={handlePanel}
            value="filter"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <div>
            <ColorPicker
              color={filterColor}
              alpha={100}
              onChange={handleColor}
              placement="bottomLeft"
            />
          </div>
        </div>
        <Slider
          ValueLabelComponent={ValueLabelComponent}
          disabled={!panel.filter}
          value={filterOpacity}
          min={0}
          step={0.1}
          max={1}
          onChange={handleOpacity}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider"
        />
      </div>
    </>
  );
};

export default FilterContainer;

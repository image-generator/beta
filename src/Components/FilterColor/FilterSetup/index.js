import React from 'react';
import { Switch, Slider } from '@material-ui/core';
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
  }
});

const FilterSetup = ({ onOpacityChange, onSwitchChange, onColorChange, checked, color, opacity }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Switch
            classes={{ root: classes.switch }}
            checked={checked}
            onChange={onSwitchChange}
            value="filter"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <div>
            <ColorPicker
              color={color}
              alpha={100}
              onChange={onColorChange}
              placement="bottomLeft"
            />
          </div>
        </div>
        <Slider
          disabled={!checked}
          value={opacity}
          min={0}
          step={0.1}
          max={1}
          onChange={onOpacityChange}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider"
        />
      </div>
    </>
  )
}

export default FilterSetup;

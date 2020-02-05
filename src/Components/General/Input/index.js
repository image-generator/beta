import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    marginBottom:10,
  }
});

const Input = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-size-normal"
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
      classes={{ root: classes.input }}
    />
  );
}

export default Input;
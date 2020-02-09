import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    marginBottom: 4,
    "& div": {
      height: 26,
      borderRadius: 2
    },
    "& input": {
      fontSize: 14,
      fontWeight: 400,
      paddingTop: 0,
      paddingBottom: 0
    }
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
      classes={{ root: classes.input, focused: classes.focus }}
    />
  );
};

export default Input;

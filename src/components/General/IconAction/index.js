import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);

const IconAction = props => {
  const classes = useStyles();
  return (
    <>
      <button onClick={props.action} className={classes.button}>
        {props.children}
      </button>
    </>
  );
};

export default IconAction;

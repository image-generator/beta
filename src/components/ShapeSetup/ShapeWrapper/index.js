import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);

const ShapeWrapper = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};

export default ShapeWrapper;

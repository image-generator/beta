import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

const FilterWrapper = ({ color, opacity }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.overlay}
      style={{ backgroundColor: color, opacity }}
    />
  );
};

export default FilterWrapper;

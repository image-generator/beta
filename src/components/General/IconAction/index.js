import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const IconAction = (props) => {
  const classes = useStyles();
  const { children, action } = props;
  return (
    <>
      <button type="button" onClick={action} className={classes.button}>
        {children}
      </button>
    </>
  );
};

export default IconAction;

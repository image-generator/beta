import React from 'react';
import Card from '@material-ui/core/Card';
import imagePortrait from '../../images/portrait.svg';
import imageLandScape from '../../images/landscape.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    display: 'inline-block',
    marginBottom: 30,
    fontSize: 20,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    height: 40,
    objectFit: 'contain',
    marginBottom: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
    padding: 20,
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
    border: '1px solid #dedede',
    borderRadius: 2,
    minWidth: 180,
  }
});

const SelectOrientation = ({ onSelect }) => {
  const classes = useStyles();

  return (
    <>
      <span className={classes.title}>Qual tipo de imagem quer criar?</span>
      <div className={classes.flex}>
        <Card className={classes.card} onClick={() => onSelect('horizontal')}>
          <img className={classes.img} src={imagePortrait} alt="Imagem para Feed" />
          Imagem Horizontal
        </Card>
        <Card className={classes.card} onClick={() => onSelect('vertical')}>
          <img className={classes.img} src={imageLandScape} alt="Imagem para Stories" />
          Imagem Vertical
        </Card>
      </div>
    </>
  );
};

export default SelectOrientation;

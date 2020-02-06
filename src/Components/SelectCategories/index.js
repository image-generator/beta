import React, { useState } from 'react';
import { options } from '../../config';
import './styles.css';
import { Chip, Dialog, DialogTitle, DialogContent, DialogContentText, Button, TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        padding: '16px 24px 5px 24px',
        '& h2': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        },
    },
    subtitle: {
        margin: 0,
    },
    select: {
        width: '100%',
    },
    wrapper: {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 3,
    },
    dialog: {
        minWidth: 600,
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px 25px 20px 0',
    },
  });
  
const SelectCategories = ({ onSubmit }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState([]);
    const [categoriesSelected, setCategoriesSelected] = useState(options);

    const handleClose = () => {
        setOpen(false);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            selectedOption,
        });
        setOpen(false);
    };

    const handleClick = (chip, index) => {
        setSelectedOption([...selectedOption, chip]);
        const newCategoriesSelected = categoriesSelected;
        newCategoriesSelected[index].active = !newCategoriesSelected[index].active;
        setCategoriesSelected(newCategoriesSelected);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
            classes={{ paper: classes.dialog }}
        >
            <DialogTitle id="max-width-dialog-title" classes={{ root: classes.title }}>
                <span>Imagem de fundo</span>
                <TextField
                    id="outlined-search"
                    label="Filtrar categorias"
                    type="search"
                    variant="outlined"
                    size="small"
                />
            </DialogTitle>
            <DialogContent>
            <DialogContentText classes={{ root: classes.subtitle }}>
                Selecione uma ou mais categorias.
            </DialogContentText>
                <FormControl className={classes.select}>
                    <div className={classes.wrapper}>
                        {categoriesSelected.map((option, index) => (
                            <div key={option.value} className={classes.chip}>
                                <Chip
                                    onClick={() => handleClick(option, index)}
                                    label={option.label}
                                    variant="outlined"
                                    clickable
                                    color={option.active ? "primary" : "default"}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.footer}>
                        <Button onClick={handleSubmit} variant="contained" color="primary" disableElevation>
                            Buscar Imagens
                        </Button>
                    </div>
                </FormControl>
            </DialogContent>
        </Dialog>
    );
};

export default SelectCategories;
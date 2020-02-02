import React, { useState, useEffect } from 'react';
import { options } from '../../config';
import './styles.css';
import { Chip, Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, FormControl, InputLabel, MenuItem, Select, Checkbox, ListItemText, TextField } from '@material-ui/core';


const Categories = ({ onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [open, setOpen] = React.useState(true);

    const [categoriesSelected, setCategoriesSelected] = useState(options);

    const handleChange = event => {
        setSelectedOption(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            selectedOption,
        });
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
            classes={{ paper: "dialog" }}
        >
            <DialogTitle id="max-width-dialog-title">Imagem de fundo</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Selecione uma ou mais categorias.
            </DialogContentText>
                <FormControl className="select">
                    <TextField id="outlined-search" label="Filtrar categorias" type="search" variant="outlined" />
                    <div className="chipWrapper">
                        {categoriesSelected.map((option, index) => (
                            <div key={option.value} className="chip">
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
                    <div className="footer">
                        <Button onClick={handleSubmit} variant="contained" color="primary" disableElevation>
                            Buscar Imagens
                        </Button>
                    </div>
                </FormControl>
            </DialogContent>
                
        </Dialog>
    );
};

export default Categories;
import React, { useState } from 'react';
import Select from 'react-select';
import { options } from '../../config';
import './styles.css';


const Categories = ({ onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState(null);

/*     const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]; */
    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            selectedOption,
        });
    }

    return (
        <div className="searchWrapper">
            <div className="inputsWrapper">
                <form onSubmit={handleSubmit}>
                    <Select
                        value={selectedOption}
                        onChange={(e) => handleChange(e)}
                        options={options}
                    />
                    <button>Buscar Imagem</button>
                </form>
            </div>
        </div>
        
    );
};

export default Categories;
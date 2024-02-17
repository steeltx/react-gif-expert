import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        // evitar el refresh por default que se realiza con el form
        event.preventDefault();
        // si no hay caracteres, no hacer nada
        if (inputValue.trim().length <= 1) return;
        // agregar las nuevas categorias a las que ya existen
        //setCategories( categories => [ inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        // una vez ingresado el valor, limpiar el input
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
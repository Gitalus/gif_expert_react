import React, { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInpuValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInpuValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setCategories(cats => [...cats, inputValue]);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

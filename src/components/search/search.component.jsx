import React from 'react';

import './search.styles.css'
// * En lugar de solo recibir props
// * Podemos destructurar en donde van los argunmentos
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)
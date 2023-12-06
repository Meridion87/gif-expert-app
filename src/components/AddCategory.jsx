import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('One Punch');

  const onInpuntChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => { // función llamada al presionar enter
    event.preventDefault(); // evitar el refresh del navegador web
    if (inputValue.trim().length <= 1) {
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInpuntChange}
      />
    </form>
  )
}

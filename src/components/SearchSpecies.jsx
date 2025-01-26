import {  useState } from "react"

export const SearchCharacter = ({onSearch}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const characterSearch = inputValue.trim();
        if(characterSearch.length <= 1) return;
        onSearch(characterSearch);
        setInputValue('');
    }

    return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Species"
        />
    </form>
  )
}

import { useState } from 'react';

import styles from '../SearchBar/SearchBar.module.css'


const SearchBar = ({ onSearch }) => {
   const [character, setCharacter] = useState('');
 
   const handleKeyPress = (event) => {
     if (event.key === 'Enter') {
       onSearch(character);
     }
   };
 
   const handleChange = (event) => {
     setCharacter(event.target.value);
   };
 
   return (
     <div className={styles.searchBar}>
       <input type='search' placeholder='id' value={character} onChange={handleChange} onKeyPress={handleKeyPress} />
       <button onClick={() => onSearch(character)}>Agregar</button>
     </div>
   );
 };

export default SearchBar;

import styles from './Search.module.css';
import { useState } from 'react';

export default function SearchBar({ onSearch, onSearchByname }) {
   // const [id, setId] = useState('');
   const [name, setName] = useState('');

   const handleChange = (event) => {
      const value = event.target.value;

      if (event.target.name === 'name') {
         setName(value);
      }
   }

   const handleSearchByName = () => {
      onSearchByname(name);
      setName('');
   }

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         handleSearchByName();
      }
   }

   return (
      <div className={styles.div}>
         <div className={styles.cont}>
            <input
               className={styles.input}
               placeholder='name...'
               type='search'
               name='name'
               onKeyUp={handleEnter}
               onChange={handleChange}
               value={name}
            />
            <button className={styles.btn} onClick={handleSearchByName}>Buscar</button>
         </div>
      </div>
   );
}

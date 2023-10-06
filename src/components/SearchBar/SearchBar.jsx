import styles from './Search.module.css';
import { useState } from 'react';

export default function SearchBar({ onSearch, onSearchByname }) {
   const [id, setId] = useState('');
   const [name, setName] = useState('');

   const handleChange = (event) => {
      const value = event.target.value;
      if (event.target.name === 'id') {
         setId(value);
      } else if (event.target.name === 'name') {
         setName(value);
      }
   }

   const handleSearchById = () => {
      onSearch(id);
      setId('');
   }

   const handleSearchByName = () => {
      onSearchByname(name);
      setName('');
   }

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         handleSearchById();
         handleSearchByName();
      }
   }

   return (
      <div className={styles.div}>
         <div className={styles.cont}>
            <input
               className={styles.input}
               placeholder='id...'
               type='search'
               name='id'
               onKeyUp={handleEnter}
               onChange={handleChange}
               value={id}
            />
            <input
               className={styles.input}
               placeholder='name...'
               type='search'
               name='name'
               onKeyUp={handleEnter}
               onChange={handleChange}
               value={name}
            />
            <button className={styles.btn} onClick={handleSearchById}>Buscar por ID</button>
            <button className={styles.btn} onClick={handleSearchByName}>Buscar por Nombre</button>
         </div>
      </div>
   );
}

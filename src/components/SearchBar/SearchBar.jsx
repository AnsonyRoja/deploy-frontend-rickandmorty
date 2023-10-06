import styles from './Search.module.css';
import { useState } from 'react';


export default function SearchBar({ onSearch, onSearchByname }) {
   const [id, setId] = useState('');
   const [name, setName] = useState('');

   const handleChange = (event) => {

      if (typeof event.target.value === 'string') {
         onSearchByname(name);
         setName(event.target.value);
      }

      if (typeof event.target.value === 'number') {

         onSearch(id);
         setId(event.target.value);
      }

   }
   const handlerEnter = (event) => {

      if (event.key === 'Enter') {
         onSearchByname(name);
         onSearch(id);
         setId('');
      }

   }

   return (
      <div className={styles.div}>

         <div className={styles.cont}>
            <input className={styles.input} placeholder='id...' type='search' onKeyUp={handlerEnter} onChange={handleChange} value={id} />
            <button className={styles.btn} onClick={() => { onSearch(id); setId('') }}>Agregar</button>
         </div>

      </div>
   );
}

import styles from './Search.module.css';
import { useState } from 'react';


export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);

   }
   const handlerEnter = (event) => {

      if (event.key === 'Enter') {

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

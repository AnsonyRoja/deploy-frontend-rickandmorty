
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacters] = useState({});


    useEffect(() => {
        axios(`https://deploy-backend-rickandmorty.onrender.com/rickandmorty/character/${id}`)
            .then(response => response.data)
            .then((data) => {
                if (data.name) {
                    setCharacters(data);
                } else {
                    alert('¡No hay personajes con este ID!');
                }
            });
        return setCharacters({});
    }, [id])


    return (

        <div className={styles.firstContainer}>

            {/* {
                // cohercion de datos
                // character && <div>
                //     <h2>{character.name}</h2>

                // ternarios
                // </div> 
                // character ? <h2>{character.name}</h2>:null */}


            {/* condicional chaining  renderizado condicional*/}
            <div className={styles.container}>
                <h2 className={styles.h2}>{character?.name}</h2>
                <h2 className={styles.h2}>{character?.status}</h2>
                <h2 className={styles.h2}>{character?.species}</h2>
                <h2 className={styles.h2}>{character?.gender}</h2>
                <h2 className={styles.h2}>{character?.origin?.name}</h2>
            </div>
            <div className={styles.containerImage}>

                <img className={styles.image} src={character.image} alt={character?.name} />
            </div>

        </div>
    )

}


export default Detail;
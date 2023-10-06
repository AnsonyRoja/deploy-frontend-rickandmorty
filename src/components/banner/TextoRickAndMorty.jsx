import React from 'react';
import Banner from '../assets/img/Rick and Morthy Blue.png'
import styles from './TextoRickAndMorty.module.css'

export default function BannerTexto() {


    return (
        <>


            <img className={styles.RM} src={Banner} alt='banner' />

        </>

    );


}
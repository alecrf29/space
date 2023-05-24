import React from 'react'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {


    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a href="https://facebook.com/">
                    <img src={facebook} alt="ícone do Facebook" />
                </a>
            
            
                <a href="https://twitter.com/">
                    <img src={twitter} alt="ícone do Twitter" />
                </a>
            
            
                <a href="https://instagram.com/">
                    <img src={instagram} alt="Ícone do Instagram" />
                </a>
                </div>
                <p>Desenvolvido pelo ale</p>
        </footer>
    )
}
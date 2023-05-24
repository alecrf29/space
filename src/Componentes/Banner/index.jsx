import bannerImagem from "./src/PaginaInicial/banner.png"
import styles from './banner.module.scss'

export default function Banner () {

    return (
        <section className={styles.banner}>
            <h1>A Galria mais completa do Espaço</h1>
            <img src={bannerImagem} alt="A imagem da terra vista do espaço" />
        </section>
    )

}
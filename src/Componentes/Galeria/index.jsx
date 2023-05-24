import Tags from "../Tags";
import styles from '../Galeria/Galeria.module.scss'
import fotos from './fotos.json'
import Cards from "./Cards";
import { useState } from "react";

export default function Galeria() {
    const [itens, setItens] = useState(fotos)

    const tags = [... new Set(fotos.map(foto => foto.tag))] //new Set faz com que os valores nao se repitam

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter(foto => {
            return foto.tag === tag
        })

        setItens(novasFotos)
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
            <Cards itens={itens} styles={styles} />
        </section>
    )
}
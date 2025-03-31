import protagonista from '../../assets/img/livro-o-protagonista.png'
import D from '../Doados/doados.module.scss'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function Doados(){

    const [livros, setLivros] = useState([])
    const getLivros = async() => {
        const response = await axios.get("https://projeto-api-livros.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(() => {
        getLivros()
    }, [])


    return(
        <section className={D.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={D.boxCard}>
                <article>
                    <img src={protagonista} alt="" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                {livros.map((livro) => (
                    <article key={livro.id}>
                        <img src={livro.imagem_url} alt="" />
                        <h3>{livro.titulo}</h3>
                        <p>{livro.autor}</p>
                        <p>{livro.categoria}</p>
                    </article>
                ))}
            </section>
        </section>
            
    )
}
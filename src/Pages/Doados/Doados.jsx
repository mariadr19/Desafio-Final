import protagonista from '../../assets/img/livro-o-protagonista.png'
import D from '../Doados/doados.module.scss'

export default function Doados(){
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
            </section>
        </section>
            
    )
}
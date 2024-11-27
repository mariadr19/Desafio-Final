import protagonista from '../../assets/img/livro-o-protagonista.png'
import D from '../Doados/doados.module.scss'

export default function Doados(){
    return(
        <section className={D.box1}>
            <h2>Livros Doados</h2>
            <section className={D.box2}>
            <img src={protagonista} alt="" />
                <p>O Protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </section>
        </section>
            
    )
}
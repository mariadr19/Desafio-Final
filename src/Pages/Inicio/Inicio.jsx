import s from './inicio.module.scss'
import balance from '../../assets/img/balance.png'
import read from '../../assets/img/read.png'
import transform from '../../assets/img/transform.png'
import network from '../../assets/img/network.png'

export default function Inicio(){
    return(
        <main>
            <section className={s.Banner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.devoDoar}>
                <div>
                    <h2>
                        Por que devo doar?
                    </h2>
                </div>
                <section className={s.boxCard}>
                    <article>
                        <img src={network} alt="" />
                        <p>
                        Oferece livros a quem não tem acesso, 
                        ajudando a reduzir a exclusão social.
                        </p>
                    </article>
                    <article>
                        <img src={read} alt="" />
                        <p>
                        Estimula o hábito da 
                        leitura e o aprendizado contínuo. 
                        </p>
                    </article>
                    <article>
                        <img src= {transform} alt="" />
                        <p>Fornece conhecimento e inspiração, 
                            permitindo que indivíduos transformem 
                            suas vidas.
                        </p>
                    </article>
                    <article>
                        <img src={balance} alt="" />
                        <p>Garante que todos, 
                            independentemente de sua 
                            condição, tenham oportunidades 
                            de aprendizado.
                        </p>
                    </article>
                </section>
            </section>
        </main>
    )
}
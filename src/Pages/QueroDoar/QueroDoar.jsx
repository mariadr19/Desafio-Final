import livro from '../../assets/img/livro.png'
import d from '../QueroDoar/queroDoar.module.scss'

export default function QueroDoar(){
    return(
        
        <section className={d.Principal}>
            <section className={d.conteiner}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            
                <form action="">
                    <div>
                        <img src={livro} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo'/>
                    <input type="text" placeholder='Categoria'/>
                    <input type="text" placeholder='Autor'/>
                    <input type="text" placeholder='Link da imagem'/>
                    <input type="submit" value="Doar"/>
                </form>
            </section>
        </section>
        
    )
}

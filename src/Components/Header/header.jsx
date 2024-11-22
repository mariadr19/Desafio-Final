import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import s from './header.module.scss'

export default function header(){
    return(
        <BrowserRouter>
        <header className={s.header}>
            <section className={s.boxLogo}>
                <img src={logo} alt="Imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.boxMenu}>
                <ul>
                    <li><Link className={s.link} to ="/">Inicio</Link></li>
                    <li><Link className={s.link} to ="/doados">Livros Doados</Link></li>
                    <li><Link className={s.link} to ="/querodoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={s.boxInput}>
              <input type="text" placeholder="O que você procura?"/>
              <img src={search} alt="imagem de uma lupa" />
            </div>
        </header>
        <Routes>
            <Route path= "/" element={<Inicio/>}/>
            <Route path= "/doados" element={<Doados/>}/>
            <Route path= "/querodoar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}
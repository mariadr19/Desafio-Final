import livro from '../../assets/img/livro.png'
import d from '../QueroDoar/queroDoar.module.scss'

import axios from 'axios'
import { useState } from 'react'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem] = useState("")

    const enviarDados = async() => {
        
        const urlApi = "https://projeto-api-livros.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar)

    alert("Livro doado com sucesso!")
    
    setTitulo("")
    setCategoria("")
    setAutor("")
    setImagem("")
    }


    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
        console.log(e.target.value);
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    
    const capturaImagem = (e) => {
        setImagem(e.target.value)
    }

    return(
        
        <section className={d.Principal}>
            <section className={d.conteiner}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div>
                        <img src={livro} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo}/>
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder='Link da imagem' onChange={capturaImagem} value={imagem_url}/>
                    <input className={d.Doar} onClick={enviarDados} type="submit" value="Doar"/>
                </form>
            </section>
        </section>
        
    )
}

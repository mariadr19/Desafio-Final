import f from '../Footer/footer.module.scss'
import face from '../../assets/img/logoFace.png'
import insta from '../../assets/img/logoInstagram.png'
import youtube from '../../assets/img/logoYoutube.png'
import linkedin from '../../assets/img/logoLinkedin.png'
import twitter from '../../assets/img/logoTwitter.png'


export default function footer(){
    return(
        <footer>
            <section className={f.social}>
                <h3>4002-8922</h3>
                <nav>
                    <a href="https://pt-br.facebook.com/" target='_blank'><img src={face} alt="logo do facebook" /></a>
                    <a href="https://x.com/"              target='_blank'><img src={twitter} alt="logo do twitter" /></a>
                    <a href="https://www.youtube.com/"    target='_blank'><img src={youtube} alt="logo do youtube" /></a>
                    <a href="https://br.linkedin.com/"    target='_blank'><img src={linkedin} alt="logo do linkedin" /></a>
                    <a href="https://www.instagram.com/"  target='_blank'><img src={insta} alt="logo do instagram" /></a>
                </nav>
            </section>
            <section className={f.rodape}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}
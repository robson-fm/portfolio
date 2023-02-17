import './style.css';
import '../Botao/styleDark.css';
import MudaModo from'../Botao/mudaModo';
import { Link } from 'react-router-dom';


export default function Topo() {

    return (
     
        <div className="centralizar">
            <header className="cabecalho">
                <div className="perfil">
                    <img className="perfil-foto" src="assets/foto_perfil.jpg" />
                    <div className="titulo">
                        <h1>Robson Ferreira Miranda</h1>
                        <h3>Desenvolvedor front-end</h3>
                        <ul id="rede-social">
                            <a href="https://www.instagram.com/robsonferreiramiranda/" target="_blank">
                                <li><img className="img-rede" src="assets/Instagram.png" /></li>
                            </a>
                            <a href="https://www.facebook.com/robson.ferreiramiranda.7" target="_blank">
                                <li><img className="img-rede" src="assets/Facebook.png" /></li>
                            </a>
                            <a href="https://www.linkedin.com/in/robson-ferreira-miranda-6489881a0/" target="_blank">
                                <li><img className="img-rede" src="assets/linkedin.png" /></li>
                            </a>
                            <a href="https://github.com/robson-fm" target="_blank">
                                <li><img className="img-rede" src="assets/Github.png" /></li>
                            </a>
                        </ul>
                    </div>
                </div>
                <nav>
                    <Link className="link-topo" to='/'>Home</Link>
                    <Link className="link-topo" to='/sobreMim'>Sobre Mim</Link>
                    <Link className="link-topo" to='/cv'>CV</Link>

                </nav>

                <div className="tema">
                   <MudaModo/>
                </div>

            </header >
        </div>
       
    );

}
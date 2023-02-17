import Topo from '../../Topo';
import Rodape from '../../Rodape';
import '../../Botao/mudaModo';
import './style.css';


export default function Home() {
    return (
        <div>
        <Topo/>

        <div className="container">
            <main className="portfolio">
                <div className="projetos">
                    <ul>Projetos</ul>
                    <li>
                        <p>Calculadora de IMC</p>
                        <a href="https://dist-wheat-nine.vercel.app/" target="_blank">
                            <li><img className="img-link" src="assets/imc.png" /></li></a>
                    </li>
                    <li>
                        <p>Conversor de Moeda</p>
                        <a href="https://robson-fm.github.io/conversor/" target="_blank">
                            <li><img className="img-link" src="assets/conversor_moeda.jpg" /></li></a>
                    </li>
                    <li>
                        <p>Calculo da D<span>í</span>vida</p>
                        <a href="https://robson-fm.github.io/calculo-da-divida/" target="_blank">
                            <li><img className="img-link" src="assets/calculo_divida.jpg" /></li></a>
                    </li>
                    <li>
                        <p>RHCP - Em evolu<span>çã</span>o</p>
                        <a href="https://projeto-rhcp.vercel.app/index.html" target="_blank">
                            <li><img className="img-link" src="assets/img.png" /></li></a>
                    </li>
                    <li>
                        <p>Happy Hour</p>
                        <a href="https://robson-fm.github.io/happyhour/" target="_blank">
                            <li><img className="img-link" src="assets/happy_hour.jpg" /></li></a>
                    </li>
                </div>

                <div className="playlist">
                    <ul>Playlist</ul>
                   
                    <iframe src="https://open.spotify.com/embed/playlist/5bD087XAQobGoBIJze3WkB?utm_source=generator" 
                    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay;
                    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                      </iframe>
                </div>

            </main>

        </div>
        
        <Rodape/>
        </div>

    )
}
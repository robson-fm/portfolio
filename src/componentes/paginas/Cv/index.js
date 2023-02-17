import Topo from '../../Topo';
import Rodape from '../../Rodape';
import './style.css';

export default function Cv(){

    return (
        <div>
            <Topo/>
        <div className="container-cv">
            <main className="centralizar-cv">
                <div className="CV">
             <h1><a href="assets/Robson_Ferreira_CV.pdf" download>Baixar Curr<span>í</span>culo em PDF</a></h1>
                    
                </div>

            </main>

        </div>
        <Rodape/>
        </div>
    )
}
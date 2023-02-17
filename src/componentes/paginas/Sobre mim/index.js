import Topo from '../../Topo';
import Rodape from '../../Rodape';
import './style.css';

export default function SobreMim() {

    return (
        <div>
            <Topo />
            <div className="container">
                <main className="SobreMim">
                    <h1>Sobre Mim <img src="assets/stacks.jfif"/><img className="img-react"src="assets/stacks-react.png"/></h1>
                    <p>
                        Olá, sou Robson. Em meu portfólio, você encontrará 
                        uma visão detalhada da minha jornada de aprendizado e 
                        evolução nos aspectos técnicos de HTML, CSS, JavaScript 
                        e React.js. Busco minha primeira oportunidade como 
                        estagiário ou desenvolvedor junior e acredito que este 
                        portfólio irá destacar meu potencial e habilidades. 
                        Reconheço que ainda tenho muito a aprender e crescer, 
                        mas estou comprometido em agregar valor à empresa que eu 
                        venha a trabalhar.
                    </p>
                    <p>
                    Meu objetivo na carreira de desenvolvimento de software é tornar-me um 
                    desenvolvedor full stack completo. No entanto, desejo iniciar minha 
                    jornada na área como desenvolvedor front-end para adquirir experiência e
                     habilidades em tecnologias mais específicas. Ao longo do tempo, espero 
                     evoluir e expandir meu conhecimento para também atuar no back-end, de 
                     acordo com as stacks e demandas da empresa.

                    </p>

                    <p>Agora, sobre mim, sou apaixonado por música, filmes e passar tempo 
                        com minha família. Além disso, gosto de manter-me fisicamente ativo, 
                        frequentando a academia. Embora seja uma pessoa tímida, venho 
                        trabalhando em superar essa característica ao longo dos anos, 
                        tendo trabalhado por muito tempo na área de atendimento ao cliente. 
                        Busco agora realizar-me profissionalmente e ajudar aqueles que amo.
                         Mesmo sendo tímido, sou bom em fazer amigos, trabalhar em equipe, 
                         sou flexível, empático, atencioso e focado. Gosto do desafio de 
                         entrar em uma área que oferece muitos desafios e oportunidades para 
                         se desenvolver. Este é um breve resumo sobre mim. Espero poder 
                         contribuir de alguma forma. Obrigado!   
                    </p>

                </main>

            </div>
            <Rodape />
        </div>
    )
}
import './style/Home.css'

import img from "../../img/savings.svg"
import LinkButton from '../LinkButton';

export default function Home() {
    return ( 
        <>
         <section className='home-container'>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newprojects" text="Criar Projeto" classLinkBtn="link-btn" />

            <img src={img} alt="Costs" />
         </section>
        </>
    );
}

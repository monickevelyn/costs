import './style/NewProjects.css'
import { useNavigate } from "react-router-dom"
import ProjectForm from '../project/ProjectForm';

export default function NewProjects() {
    const navigate = useNavigate();

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
              method: "POST",
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects', {state: "Projeto criado"})
        })
        .catch((err) => console.log(err))
    }

    return ( 
        <>
        <section className='newproject'>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} BtnText="Criar Projeto" />
        </section>
        </>
    );
}
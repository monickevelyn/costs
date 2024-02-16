import "./style/Project.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from './../Loading';
import ProjectForm from "../project/ProjectForm";
import ServiceForm from "../service/ServiceForm";
import { v4 as uuidv4} from "uuid"
import ServiceCard from "../service/ServiceCard";

export default function Project(){
    const { id } = useParams();
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setshowProjectForm] = useState(false)
    const [showServiceForm, setshowServiceForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setServices(data.services)
        })
        .catch((error) => console.log(error))   
    }, [id])

    // project

    function editProject(project){
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setshowProjectForm(false)
        })
        .catch((error) => console.log(error))        
    }

    function toggleProjectForm(){
        setshowProjectForm(!showProjectForm)
    }

    // service

    function toggleServiceForm(){
        setshowServiceForm(!showServiceForm)
    }

    function createService(project){
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4();
       
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
    }

    function removeService(id){
        const updateServices = project.services.filter(
            (service) => service.id !== id
        )

        const updateProjects = project;
        updateProjects.services = updateServices;

        fetch(`http://localhost:5000/projects/${updateProjects.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(updateProjects)
        })
            .then((resp) => resp.json())
            .then(() => {
                setProject(updateProjects)
                setServices(updateServices)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
        {
            project.nome_projeto ? (
                <section className="projeto-detalhes">
                    <div className="div-projeto-detalhes"> 
                        <div className="detalhes-titulo">
                            <h1>{project.nome_projeto}</h1>
                            <button onClick={toggleProjectForm} className="btn">
                                {!showProjectForm ? 'Editar' : 'Fechar'}
                            </button> 
                        </div> 
                        <div className="project-infos">
                            {!showProjectForm ? 
                            <div className="infos">
                                <p>
                                    <span>Orçamento: </span> R${project.valor_ocarmento}
                                </p>
                                <p>
                                    <span>Categoria: </span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total utilizado: </span> R${project.cost}
                                </p>
                            </div>
                            : 
                            <div className="infos">
                                <ProjectForm 
                                    handleSubmit={editProject}
                                    BtnText="Salvar"    
                                    projectData={project}                        
                                />
                            </div>
                            }
                        </div>                  
                    </div>

                    <div className="service-container">
                        <div className="detalhes-titulo">
                            <h2>Serviços</h2> 
                            <button onClick={toggleServiceForm}  className="btn">
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                        </div> 
                        <div className="project-infos">
                            {
                                showServiceForm && (
                                    <ServiceForm 
                                        BtnText="Adicionar"
                                        handleSubmit={createService}
                                        projectData={project}
                                    />
                                )
                            }
                        </div>
                        <div className="service-cards">                                       
                            {
                                services.length > 0 && 
                                    services.map((service) => (
                                        <ServiceCard 
                                            id={service.id}
                                            key={service.id}
                                            nameService={service.nome_servico}
                                            cost={service.cost}
                                            descri={service.descri}
                                            handleRemove={removeService}
                                        />
                                    ))                            
                            }
                            {
                                services.length === 0 && (
                                    <p>Não serviços no projeto</p>
                                )
                            }
                        </div> 
                    </div>
                </section>
            ) 
            : (<Loading />)
        }
        </>
    )
}
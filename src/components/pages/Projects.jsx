import "./style/Projects.css";
import { useState, useEffect } from "react";
import LinkButton from "../LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../Loading";

export default function Projects() {
  const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

  useEffect(() => {
     setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          'Content-Type' : 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, 1000)
  }, [])

    function removeProjects(id){
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type' : 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then(() => {
          setProjects(projects.filter((project) => project.id != id))
        })
        .catch((err) => console.log(err))
    }

    return ( 
        <>
        <secton className="projeto-container">
          <div className="titulo-projeto-container">
            <h1>Meus Projetos</h1>
            <LinkButton to="/newprojects" text="Criar Projeto" classLinkBtn="link-btn" />
          </div>
          <div className="div-projeto-container">
            {projects.length > 0 && 
              projects.map((project) => (
                <ProjectCard 
                  key={project.name} 
                  name={project.nome_projeto} 
                  id={project.id}
                  budget={project.valor_ocarmento}
                  category={project.category.name}
                   handleRemove={removeProjects}
                /> 
              ))}
            {!removeLoading && <Loading />}
          </div>
        </secton>
        </>
    );
}
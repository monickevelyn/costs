import "./style/ProjectForm.css"
import Input from "../form/input"
import Select from "../form/Select"
import ButtonSubmit from "../form/ButtonSubmit"
import { useState, useEffect } from "react"

export default function ProjectForm({ handleSubmit, BtnText, projectData }){
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e){
    setProject({ ...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
      }, 
    })
  }
    return(
        <>
        <form onSubmit={submit} className="project-form">
          <Input 
            type="text"
            name="nome_projeto"
            text="Nome do projeto:"
            placeholder="Insira o nome do projeto"   
            handleOnChange={handleChange}   
            value={project.name}    
          />
          <Input 
            type="number"
            name="valor_ocarmento"
            text="Orçamento total:"
            placeholder="Insira o valor do orçamento total"  
            handleOnChange={handleChange} 
            value={project.budget}           
          />
          <Select 
            name="category_id" 
            text="Selecione a categoria:"  
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
          />
          <ButtonSubmit text={BtnText} />
        </form>
        </>
    )
}
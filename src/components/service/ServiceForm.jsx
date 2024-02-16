import "./style/ServiceForm.css"
import { useState } from "react"
import Input from "../form/input"
import ButtonSubmit from "../form/ButtonSubmit"

export default function ServiceForm({ BtnText, handleSubmit, projectData }){

    const [service, setService] = useState(projectData || {})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
        setService(service)
    }

    function handleChange(e){
        setService({ ...service, [e.target.name]: e.target.value })
    }
    
    return(
        <>
        <form onSubmit={submit} className="service-form">
            <Input 
                type="text"
                text="Nome do serviço:"
                name="nome_servico"
                placeholder="Insira o nome do serviço"      
                value={service.nome_servico}
                handleOnChange={handleChange}  
            />
            <Input 
                type="number"
                text="Custo do servço:"
                name="cost"
                placeholder="Insira o valor total"      
                value={service.costs}
                handleOnChange={handleChange}  
            />
            <Input 
                type="text"
                text="Descrição do serviço:"
                name="descri"
                placeholder="Descrição do serviço"      
                value={service.descri}
                handleOnChange={handleChange}  
            />
            <ButtonSubmit text={BtnText} />
        </form>
        </>
    )
}
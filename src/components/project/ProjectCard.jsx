import "./style/ProjectCard.css"
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export default function ProjectCard({ id, name, budget, category, handleRemove }){
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return(
        <>
        <div className="projeto-card">
            <h4>{name}</h4>
            <p>
                <span>Orçamento: </span> R${budget}
            </p>
            <p>
                <span>*</span> {category}
            </p>
            <div className="confg-projeto">
                <Link to={`/projects/${id}`}> 
                    <BsPencil /> Editar
                </Link>

                <button onClick={remove}> 
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
        </>
    )
}
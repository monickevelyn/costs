import "./style/ServiceCard.css"
import { BsFillTrashFill } from "react-icons/bs"

export default function ServiceCard({ id, nameService, cost, descri, handleRemove }){
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return(
        <>
        <div className="service-card" >
            <h4>{nameService}</h4>
            <div>
                <p>
                    <span>Valor do serviço:</span> R${cost}
                </p>
                <p className="p-descri">
                    {descri}
                </p>
                <button onClick={remove}> 
                  <BsFillTrashFill /> Excluir
                </button>         
            </div>
        </div>
        </>
    )
}
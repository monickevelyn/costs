import { Link } from "react-router-dom";
import './stylecomponents/LinkButton.css'

export default function LinkButton({ to, text, classLinkBtn }){

    return(
        <>
        <Link className={classLinkBtn} to={to}>
            {text}
        </Link>
        </>
    )
}
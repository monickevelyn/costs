import "./style/ButtonSubmit.css";
export default function ButtonSubmit({ text }){

    return (
      <>
      <div>
        <button className="btn-submit">{text}</button>
      </div>        
      </>
    );
}
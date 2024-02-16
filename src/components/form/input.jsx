import "./style/Input.css";
export default function Input({ type, placeholder, text, name, handleOnChange, value }){

    return (
      <>
        <div className="div-input">
          <label htmlFor={name}>{text}</label>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
          />
        </div>
      </>
    );
}
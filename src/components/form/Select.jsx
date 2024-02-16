import "./style/Select.css";
export default function Select({ text, options, name, handleOnChange, value }){

    return (
      <>
      <div className="div-input">
          <label htmlFor={name}>{text}</label>
          <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option disabled>Selecione a categoria </option>
            {
              options.map((option) => (
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
              ))
            }
          </select>
        </div>        
      </>
    );
}
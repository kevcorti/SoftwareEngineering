
export default function NombreResultado(props){
    const handleChange = (e) => {
        props.handleChange(e);
        console.log(props.formData.name)
    }
    const handleExit = () => {
        props.handleExit();
    }

    return(
        <div className="form-group">
        <label htmlFor="name">Nombre del resultado del proyecto:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={props.formData.name}
          onChange={handleChange}
          required
        />
        <div className="button-group">
          <button type="button" onClick={handleExit} className="exit-button">
            Salir
          </button>
        </div>
      </div>
    );
}
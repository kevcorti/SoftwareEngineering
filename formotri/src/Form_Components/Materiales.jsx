import PropTypes from 'prop-types';

Materiales.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    materiales: PropTypes.any,  // Ajusta esto según el tipo de datos esperado
    firmaMateriales: PropTypes.any,
    materialesFirmaImage: PropTypes.any,
    detalleMaterialesContent: PropTypes.any,
    materialComercial: PropTypes.any,
    detalleComercial: PropTypes.any
  }).isRequired,
};

export default function Materiales(props) {




  const handleChange = (e) => {
    props.handleChange(e);
  };

  const handleFileChange = (e) => {
    props.handleFileChange(e);
  };

  return (
    <>
      <div className="form-group">
        <div>
          <p style={{ color: "blue" }}>Uso de materiales externos</p>
        </div>
        <label htmlFor="materiales">
          ¿Algún aspecto del resultado del proyecto fue posible, en su totalidad
          o en parte, mediante el uso de materiales tangibles obtenidos de
          personas/organizaciones distintas de la ESPOL?
        </label>
        <p></p>
        <select
          id="materiales"
          name="materiales"
          value={props.formData.materiales}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        {props.formData.materiales === "Sí" && (
          
            <div className="form-group">
              <label htmlFor="firmaMateriales">
                ¿Se firmó un Acuerdo de Transferencia de Material (ATM) con
                respecto a la recepción de los materiales?
              </label>
              <span className="small-text">
                (En caso afirmativo, adjunte copia del acuerdo firmado)
              </span>

              <p></p>
              <select
                id="firmaMateriales"
                name="firmaMateriales"
                value={props.formData.firmaMateriales}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </select>
              {props.formData.firmaMateriales === "Sí" && (
                <div className="form-group">
                  <label htmlFor="materialesFirmaImage">
                    Adjuntar acuerdo firmado: 
                  </label>
                  <input
                    type="file"
                    id="materialesFirmaImage"
                    name="materialesFirmaImage"
                    multiple
                    required
                    onChange={handleFileChange}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="detalleMaterialesContent">
                  Detalle de uso de materiales externos; proporcione el
                  proveedor de materiales, detalles del material proporcionado:
                </label>
                <span className="small-text">
                  (Caso contrario, indique que no aplica N/A)
                </span>
                <textarea
                  id="detalleMaterialesContent"
                  name="detalleMaterialesContent"
                  value={props.formData.detalleMaterialesContent}
                  onChange={handleChange}
                  placeholder="Ingre los detalles de uso de materiales externos"
                  required
                ></textarea>
              </div>
            </div>
        )}
      </div>

      <div className="form-group">
        <div>
          <p style={{ color: "blue" }}>
            Desarrollo de materiales en el resultado del proyecto
          </p>
        </div>
        <label htmlFor="materialComercial">
          Durante el proceso de creación del resultado del proyecto, ¿ha
          desarrollado algún material que pueda tener valor comercial?
        </label>
        <p></p>
        <select
          id="materialComercial"
          name="materialComercial"
          value={props.formData.materialComercial}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        {props.formData.materialComercial === "Sí" && (
          <div className="form-group">
            <label htmlFor="detalleComercial">
              Detalle(Estos materiales suelen ser de naturaleza biológica,
              líneas celulares, anticuerpos, plásmidos, modelos de enfermedades
              y ensayos, pero pueden incluir cualquier material o prototipos no
              biológicos):
            </label>
            <span className="small-text">
              (Caso contrario, indique que no aplica N/A)
            </span>
            <textarea
              id="detalleComercial"
              name="detalleComercial"
              value={props.formData.detalleComercial}
              onChange={handleChange}
              placeholder="Ingre los detalles"
              required
            ></textarea>
          </div>
        )}
      </div>
    </>
  );
}

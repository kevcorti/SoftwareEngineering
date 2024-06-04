

export default function OrigenResultados(props){
    const handleChange = (e) => {
        props.handleChange(e);
        console.log(props.formData.name)
    }

    return(
        <>
        <div className="form-group">
          <div>
            <p style={{ color: 'blue' }}>Origen del resultado del proyecto</p>
          </div>
          <label htmlFor="projectName">Nombre del Proyecto</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={props.formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectName">Nombre del director del Proyecto</label>
          <input
            type="text"
            id="projectDirector"
            name="projectDirector"
            value={props.formData.projectDirector}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectCode">Código del proyecto </label>
          <span className="small-text">(En caso de no tener, escribir N/A)</span>
          <input
            type="text"
            id="projectCode"
            name="projectCode"
            value={props.formData.projectCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="labLog">Cuenta con bitácora de laboratorio?</label>
          <p></p>
          <select
            id="labLog"
            name="labLog"
            value={props.formData.labLog}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectRelation">Relación del resultado del proyecto:</label>
          <select
            id="projectRelation"
            name="projectRelation"
            value={props.formData.projectRelation}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="proyecto_investigacion_publica">Proyecto de investigación con financiación pública</option>
            <option value="proyecto_investigacion_privada">Proyecto de investigación con financiación privada</option>
            <option value="programa_vinculacion">Programa de vinculación</option>
            <option value="programa_docencia">Programa de docencia</option>
            <option value="programa_docencia_grado">Proyecto de docencia (titulación de grado)</option>
            <option value="programa_docencia_materias">Proyecto de docencia (materias)</option>
            <option value="programa_docencia_postgrado">Proyecto de docencia (titulación de postgrado)</option>
            <option value="programa_docencia_gestion">Proyecto de gestión educativa y administrativa</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        {props.formData.projectRelation.includes('investigacion') && (
          <div className="form-group">
            <label htmlFor="researchType">Tipo de investigación:</label>
            <p></p>
            <select
              id="researchType"
              name="researchType"
              value={props.formData.researchType}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="I+D_basica">I+D básica</option>
              <option value="I+D_aplicada">I+D aplicada</option>
              <option value="Desarrollo_experimental">Desarrollo experimental</option>
            </select>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="otherRelation">En caso que la relación del resultado del proyecto sea otro, especifique.  </label>
          <span className="small-text">Caso contrario, indique que no aplica (escriba N/A)</span>
          <input
            type="text"
            id="otherRelation"
            name="otherRelation"
            value={props.formData.otherRelation}
            onChange={handleChange}
            required
          />
        </div>
        {props.formData.projectRelation.includes('proyecto_investigacion') && (
          <div className="form-group">
            <label htmlFor="decanatoPlatform">Su proyecto está registrado en la plataforma de decanato de investigación?</label>
            <p></p>
            <select
              id="decanatoPlatform"
              name="decanatoPlatform"
              value={props.formData.decanatoPlatform}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
            {props.formData.decanatoPlatform === 'Sí' && (
              <div className="form-group">
                <p></p>
                <label htmlFor="estado">Estado:</label>
                <textarea
                  id="estado"
                  name="estado"
                  value={props.formData.estado}
                  onChange={handleChange}
                  maxLength={100}
                  placeholder="Ingrese el estado..."
                  required
                ></textarea>
              </div>
            )}
          </div>
        )}
      </>
    );
}
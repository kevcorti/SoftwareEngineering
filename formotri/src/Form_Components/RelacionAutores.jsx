import { Select, Input, Button } from "@headlessui/react";
export default function RelacionAutores(props){
    const handleChange = (e) => {
        props.handleChange(e);
    }

    const handleFileChange = (e) => {
        props.handleFileChange(e);
    }

    const handleAuthorChange = (e) => {
        props.handleFileChange(e);
    }

    const handleExternalAuthorChange = (e) =>{
        props.handleExternalAuthorChange(e);
    }

    const handleAuthorFileChange = (e) =>{
        props.handleAuthorFileChange(e);
    }

    const handleExternalAuthorFileChange = (e) =>{
        props.handleExternalAuthorFileChange(e);
    }

    const addExternalAuthor = () => {  
      props.setFormData((prevData) => ({
        ...prevData,
        otherExternalAuthors: [
          ...prevData.otherExternalAuthors,
          {
            name: '',
            signature: '',
            entity: '',
            role: '',
            id: '',
            nationality: '',
            email: '',
            phone: '',
            contributionType: '',
            contributionPercentage: '',
            ipAgreement: '',
            ipAgreementFile: null
          }
        ]
      }));
    };

    const addAuthor = () => {       //pasar funcion a su componente
      props.setFormData((prevData) => ({
        ...prevData,
        otherAuthors: [
          ...prevData.otherAuthors,
          {
            name: '',
            signature: '',
            isStudent: '',
            role: '',
            unit: '',
            id: '',
            nationality: '',
            email: '',
            phone: '',
            contributionType: '',
            contributionPercentage: '',
            ipAgreement: '',
            ipAgreementFile: null
          }
        ]
      }));
    };
 
    return(
        <div className="form-group">
        <div>
          <p style={{ color: 'blue' }}>RELACIÓN DE AUTORES/INVENTORES Y DECLARACIÓN DE PARTICIPACIONES EN EL RESULTADO DEL PROYECTO </p>
        </div>
        <label htmlFor="authorsFromESPOL">¿Los autores/inventores son de ESPOL?</label>
        <p></p>
        <Select
          id="authorsFromESPOL"
          name="authorsFromESPOL"
          value={props.formData.authorsFromESPOL}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </Select>
        {props.formData.authorsFromESPOL === 'Sí' && ( //cambiar la variable para la comporbacion
          <div>
            <h3>Datos del autor/inventor de contacto:</h3>
            <div className="form-group">
              <label htmlFor="contactAuthorName">Nombre</label>
              <Input
                type="text"
                id="contactAuthorName"
                name="contactAuthorName"
                value={props.formData.contactAuthorName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorSignature">Firma</label>
              <Input
                type="text"
                id="contactAuthorSignature"
                name="contactAuthorSignature"
                value={props.formData.contactAuthorSignature}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorRole">Cargo</label>
              <Select
                id="contactAuthorRole"
                name="contactAuthorRole"
                value={props.formData.contactAuthorRole}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Profesor">Profesor titular - Agregado 1 tiempo completo</option>
                <option value="Investigador">Profesor titular - Agregado 1 medio tiempo</option>
                <option value="Estudiante">Profesor titular - Agregado 1 tiempo parcial</option>
                <option value="Profesor">Profesor titular - Agregado 2 tiempo completo</option>
                <option value="Investigador">Profesor titular - Agregado 2 medio tiempo</option>
                <option value="Estudiante">Profesor titular - Agregado 2 tiempo parcial</option>
                <option value="Profesor">Profesor titular - Agregado 3 tiempo completo</option>
                <option value="Investigador">Profesor titular - Agregado 3 medio tiempo</option>
                <option value="Estudiante">Profesor titular - Agregado 3 tiempo parcial</option>
                <option value="Profesor">Profesor titular - Auxiliar 1 tiempo completo</option>
                <option value="Estudiante">Profesor titular - Auxiliar 1 medio tiempo</option>
              </Select>
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorUnit">Unidad/Centro ESPOL</label>
              <Select
                id="contactAuthorUnit"
                name="contactAuthorUnit"
                value={props.formData.contactAuthorUnit}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Centro de Investigaciones">Facultad de Arte, Diseño y Comunicación Audiovisual, FADCOM</option>
                <option value="Facultad de Ingeniería">Facultad de Ciencias Naturales y Matemáticas, FCNM</option>
                <option value="Facultad de Ciencias">Facultad de Ciencias Sociales y Humanísticas, FCSH</option>
                <option value="Centro de Investigaciones">Facultad de Ciencias de la Vida, FCV</option>
                <option value="Facultad de Ingeniería">Facultad de Ingeniería en Ciencias de la Tierra, FICT</option>
                <option value="Facultad de Ciencias">Facultad de Ingeniería en Electricidad y Computación, FIEC</option>
                <option value="Centro de Investigaciones">Facultad de Ingeniería Marítima y Ciencias del Mar,FIMCM</option>
                <option value="Facultad de Ingeniería">Facultad de Ingeniería en Mecánica y Ciencias de la Producción, FIMCP</option>
                <option value="Facultad de Ciencias">Escuela de Posgrado en Administración de Empresas, ESPAE</option>
                <option value="Centro de Investigaciones">Centro de Investigaciones Biotecnológicas del Ecuador, CIBE</option>
                <option value="Facultad de Ingeniería">Centro de Tecnologías de la Información, CTI</option>
              </Select>
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorID">Cédula/Pasaporte</label>
              <Input
                type="text"
                id="contactAuthorID"
                name="contactAuthorID"
                value={props.formData.contactAuthorID}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorNationality">Nacionalidad</label>
              <Input
                type="text"
                id="contactAuthorNationality"
                name="contactAuthorNationality"
                value={props.formData.contactAuthorNationality}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorEmail">Correo Electrónico</label>
              <Input
                type="email"
                id="contactAuthorEmail"
                name="contactAuthorEmail"
                value={props.formData.contactAuthorEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorPhone">Teléfono</label>
              <Input
                type="text"
                id="contactAuthorPhone"
                name="contactAuthorPhone"
                value={props.formData.contactAuthorPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorContributionType">Tipo de contribución</label>
              <Input
                type="text"
                id="contactAuthorContributionType"
                name="contactAuthorContributionType"
                value={props.formData.contactAuthorContributionType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorContributionPercentage">% de contribución en el resultado del proyecto</label>
              <Input
                type="number"
                id="contactAuthorContributionPercentage"
                name="contactAuthorContributionPercentage"
                value={props.formData.contactAuthorContributionPercentage}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactAuthorIPAgreement">¿Tiene contrato o acuerdo de Propiedad intelectual y confidencialidad firmado?</label>
              <Select
                id="contactAuthorIPAgreement"
                name="contactAuthorIPAgreement"
                value={props.formData.contactAuthorIPAgreement}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </Select>
              {props.formData.contactAuthorIPAgreement === 'Sí' && (
                <div className="form-group">
                  <label htmlFor="contactAuthorIPAgreementFile">Subir archivo PDF firmado</label>
                  <Input
                    type="file"
                    id="contactAuthorIPAgreementFile"
                    name="contactAuthorIPAgreementFile"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              )}
            </div>
            <h3>Datos de los demás inventores/autores:</h3>

            {props.formData.otherAuthors.map((author, index) => (
              <div key={index} className="form-group">
                <h4>Autor</h4>
                <div className="form-group">
                  <label htmlFor={`authorName${index}`}>Nombre</label>
                  <Input
                    type="text"
                    id={`authorName${index}`}
                    name={`authorName${index}`}
                    value={author.name}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorSignature${index}`}>Firma</label>
                  <Input
                    type="text"
                    id={`authorSignature${index}`}
                    name={`authorSignature${index}`}
                    value={author.signature}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorIsStudent${index}`}>¿Es estudiante?</label>
                  <p></p>
                  <Select
                    id={`authorIsStudent${index}`}
                    name={`authorIsStudent${index}`}
                    value={author.isStudent}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </Select>
                  {author.isStudent === 'No' && (
                    <div className="form-group">
                      <label htmlFor={`authorRole${index}`}>Cargo</label>
                      <Select
                        id={`authorRole${index}`}
                        name={`authorRole${index}`}
                        value={author.role}
                        onChange={(e) => handleAuthorChange(e, index)}
                        required
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Profesor titular - Agregado 1 tiempo completo">Profesor titular - Agregado 1 tiempo completo</option>
                        <option value="Profesor titular - Agregado 1 medio tiempo">Profesor titular - Agregado 1 medio tiempo</option>
                        <option value="Profesor titular - Agregado 1 tiempo parcial">Profesor titular - Agregado 1 tiempo parcial</option>
                        <option value="Profesor titular - Agregado 2 tiempo completo">Profesor titular - Agregado 2 tiempo completo</option>
                        <option value="Profesor titular - Agregado 2 medio tiempo">Profesor titular - Agregado 2 medio tiempo</option>
                        <option value="Profesor titular - Agregado 2 tiempo parcial">Profesor titular - Agregado 2 tiempo parcial</option>
                        <option value="Profesor titular - Agregado 3 tiempo completo">Profesor titular - Agregado 3 tiempo completo</option>
                        <option value="Profesor titular - Agregado 3 medio tiempo">Profesor titular - Agregado 3 medio tiempo</option>
                        <option value="Profesor titular - Agregado 3 tiempo parcial">Profesor titular - Agregado 3 tiempo parcial</option>
                        <option value="Profesor titular - Auxiliar 1 tiempo completo">Profesor titular - Auxiliar 1 tiempo completo</option>
                        <option value="Profesor titular - Auxiliar 1 medio tiempo">Profesor titular - Auxiliar 1 medio tiempo</option>
                      </Select>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor={`authorUnit${index}`}>Unidad/Centro ESPOL</label>
                  <Select
                    id={`authorUnit${index}`}
                    name={`authorUnit${index}`}
                    value={author.unit}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Centro de Investigaciones">Facultad de Arte, Diseño y Comunicación Audiovisual, FADCOM</option>
                    <option value="Facultad de Ingeniería">Facultad de Ciencias Naturales y Matemáticas, FCNM</option>
                    <option value="Facultad de Ciencias">Facultad de Ciencias Sociales y Humanísticas, FCSH</option>
                    <option value="Centro de Investigaciones">Facultad de Ciencias de la Vida, FCV</option>
                    <option value="Facultad de Ingeniería">Facultad de Ingeniería en Ciencias de la Tierra, FICT</option>
                    <option value="Facultad de Ciencias">Facultad de Ingeniería en Electricidad y Computación, FIEC</option>
                    <option value="Centro de Investigaciones">Facultad de Ingeniería Marítima y Ciencias del Mar,FIMCM</option>
                    <option value="Facultad de Ingeniería">Facultad de Ingeniería en Mecánica y Ciencias de la Producción, FIMCP</option>
                    <option value="Facultad de Ciencias">Escuela de Posgrado en Administración de Empresas, ESPAE</option>
                    <option value="Centro de Investigaciones">Centro de Investigaciones Biotecnológicas del Ecuador, CIBE</option>
                    <option value="Facultad de Ingeniería">Centro de Tecnologías de la Información, CTI</option>
                  </Select>
                </div>
                <div className="form-group">
                  <label htmlFor={`authorID${index}`}>Cédula/Pasaporte</label>
                  <Input
                    type="text"
                    id={`authorID${index}`}
                    name={`authorID${index}`}
                    value={author.id}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorNationality${index}`}>Nacionalidad</label>
                  <Input
                    type="text"
                    id={`authorNationality${index}`}
                    name={`authorNationality${index}`}
                    value={author.nationality}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorEmail${index}`}>Correo Electrónico</label>
                  <Input
                    type="email"
                    id={`authorEmail${index}`}
                    name={`authorEmail${index}`}
                    value={author.email}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorPhone${index}`}>Teléfono</label>
                  <Input
                    type="text"
                    id={`authorPhone${index}`}
                    name={`authorPhone${index}`}
                    value={author.phone}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorContributionType${index}`}>Tipo de contribución</label>
                  <Input
                    type="text"
                    id={`authorContributionType${index}`}
                    name={`authorContributionType${index}`}
                    value={author.contributionType}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorContributionPercentage${index}`}>% de contribución en el resultado del proyecto</label>
                  <Input
                    type="number"
                    id={`authorContributionPercentage${index}`}
                    name={`authorContributionPercentage${index}`}
                    value={author.contributionPercentage}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`authorIPAgreement${index}`}>¿Tiene contrato o acuerdo de Propiedad intelectual y confidencialidad firmado?</label>
                  <Select
                    id={`authorIPAgreement${index}`}
                    name={`authorIPAgreement${index}`}
                    value={author.ipAgreement}
                    onChange={(e) => handleAuthorChange(e, index)}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </Select>
                  {author.ipAgreement === 'Sí' && (
                    <div className="form-group">
                      <label htmlFor={`authorIPAgreementFile${index}`}>Subir archivo PDF firmado</label>
                      <Input
                        type="file"
                        id={`authorIPAgreementFile${index}`}
                        name={`authorIPAgreementFile${index}`}
                        accept="application/pdf"
                        onChange={(e) => handleAuthorFileChange(e, index)}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <Button type="button" onClick={() => addAuthor()}>Añadir otro autor/inventor</Button>
          </div>
        )}
        {props.formData.authorsFromESPOL === 'No' && (
          <div>
            <h3>Datos del primer autor/inventor:</h3>
            <div className="form-group">
              <label htmlFor="firstAuthorName">Nombre</label>
              <Input
                type="text"
                id="firstAuthorName"
                name="firstAuthorName"
                value={props.formData.firstAuthorName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorSignature">Firma</label>
              <Input
                type="text"
                id="firstAuthorSignature"
                name="firstAuthorSignature"
                value={props.formData.firstAuthorSignature}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorEntity">Entidad/Empresa</label>
              <Input
                type="text"
                id="firstAuthorEntity"
                name="firstAuthorEntity"
                value={props.formData.firstAuthorEntity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorRole">Cargo</label>
              <Input
                type="text"
                id="firstAuthorRole"
                name="firstAuthorRole"
                value={props.formData.firstAuthorRole}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorID">Cédula/Pasaporte</label>
              <Input
                type="text"
                id="firstAuthorID"
                name="firstAuthorID"
                value={props.formData.firstAuthorID}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorNationality">Nacionalidad</label>
              <Input
                type="text"
                id="firstAuthorNationality"
                name="firstAuthorNationality"
                value={props.formData.firstAuthorNationality}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorEmail">Correo Electrónico</label>
              <Input
                type="email"
                id="firstAuthorEmail"
                name="firstAuthorEmail"
                value={props.formData.firstAuthorEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorPhone">Teléfono</label>
              <Input
                type="text"
                id="firstAuthorPhone"
                name="firstAuthorPhone"
                value={props.formData.firstAuthorPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorContributionType">Tipo de contribución</label>
              <Input
                type="text"
                id="firstAuthorContributionType"
                name="firstAuthorContributionType"
                value={props.formData.firstAuthorContributionType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorContributionPercentage">% de contribución en el resultado del proyecto</label>
              <Input
                type="number"
                id="firstAuthorContributionPercentage"
                name="firstAuthorContributionPercentage"
                value={props.formData.firstAuthorContributionPercentage}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstAuthorIPAgreement">¿Tiene contrato o acuerdo de Propiedad intelectual y confidencialidad firmado?</label>
              <p></p>
              <Select
                id="firstAuthorIPAgreement"
                name="firstAuthorIPAgreement"
                value={props.formData.firstAuthorIPAgreement}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </Select>
              {props.formData.firstAuthorIPAgreement === 'Sí' && (
                <div className="form-group">
                  <label htmlFor="firstAuthorIPAgreementFile">Subir archivo PDF firmado</label>
                  <p></p>
                  <Input
                    type="file"
                    id="firstAuthorIPAgreementFile"
                    name="firstAuthorIPAgreementFile"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              )}
            </div>
            <h3>Datos de los demás autores/inventores:</h3>
            {props.formData.otherExternalAuthors.map((author, index) => (
              <div key={index} className="form-group">
                <div className="form-group">
                  <h4>Autor</h4>

                  <label htmlFor={`externalAuthorName${index}`}>Nombre</label>
                  <Input
                    type="text"
                    id={`externalAuthorName${index}`}
                    name={`externalAuthorName${index}`}
                    value={author.name}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorSignature${index}`}>Firma</label>
                  <Input
                    type="text"
                    id={`externalAuthorSignature${index}`}
                    name={`externalAuthorSignature${index}`}
                    value={author.signature}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorEntity${index}`}>Entidad/Empresa</label>
                  <Input
                    type="text"
                    id={`externalAuthorEntity${index}`}
                    name={`externalAuthorEntity${index}`}
                    value={author.entity}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorRole${index}`}>Cargo</label>
                  <Input
                    type="text"
                    id={`externalAuthorRole${index}`}
                    name={`externalAuthorRole${index}`}
                    value={author.role}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorID${index}`}>Cédula/Pasaporte</label>
                  <Input
                    type="text"
                    id={`externalAuthorID${index}`}
                    name={`externalAuthorID${index}`}
                    value={author.id}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorNationality${index}`}>Nacionalidad</label>
                  <Input
                    type="text"
                    id={`externalAuthorNationality${index}`}
                    name={`externalAuthorNationality${index}`}
                    value={author.nationality}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorEmail${index}`}>Correo Electrónico</label>
                  <Input
                    type="email"
                    id={`externalAuthorEmail${index}`}
                    name={`externalAuthorEmail${index}`}
                    value={author.email}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorPhone${index}`}>Teléfono</label>
                  <Input
                    type="text"
                    id={`externalAuthorPhone${index}`}
                    name={`externalAuthorPhone${index}`}
                    value={author.phone}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorContributionType${index}`}>Tipo de contribución</label>
                  <Input
                    type="text"
                    id={`externalAuthorContributionType${index}`}
                    name={`externalAuthorContributionType${index}`}
                    value={author.contributionType}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorContributionPercentage${index}`}>% de contribución en el resultado del proyecto</label>
                  <Input
                    type="number"
                    id={`externalAuthorContributionPercentage${index}`}
                    name={`externalAuthorContributionPercentage${index}`}
                    value={author.contributionPercentage}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`externalAuthorIPAgreement${index}`}>¿Tiene contrato o acuerdo de Propiedad intelectual y confidencialidad firmado?</label>
                  <p></p>
                  <Select
                    id={`externalAuthorIPAgreement${index}`}
                    name={`externalAuthorIPAgreement${index}`}
                    value={author.ipAgreement}
                    onChange={(e) => handleExternalAuthorChange(e, index)}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </Select>
                  {author.ipAgreement === 'Sí' && (
                    <div className="form-group">
                      <label htmlFor={`externalAuthorIPAgreementFile${index}`}>Subir archivo PDF firmado</label>
                      <p></p>
                      <Input
                        type="file"
                        id={`externalAuthorIPAgreementFile${index}`}
                        name={`externalAuthorIPAgreementFile${index}`}
                        accept="application/pdf"
                        onChange={(e) => handleExternalAuthorFileChange(e, index)}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <Button type="button" onClick={() => addExternalAuthor()}>Añadir otro autor/inventor</Button>
          </div>
        )}
      </div>
    );
}
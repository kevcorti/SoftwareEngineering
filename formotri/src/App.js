import React, { useState } from 'react';
import './App.css';
import FormNavBar from './Form_Components/FormNavBar';
import NombreResultado from './Form_Components/NombreResultado';
import OrigenResultados from './Form_Components/OrigenResultados';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    projectDirector: '',
    projectCode: '',
    projectDescription: '',
    projectNeeds: '',
    fundingRequired: '',
    agreementAccepted: false,
    labLog: '',
    projectRelation: '',
    researchType: '',
    otherRelation: '',
    decanatoPlatform: '',
    estado: '',
    diffusion: '',
    diffusionMedium: '',
    diffusionDate: '',
    diffusionContent: '',
    diffusionImages: [],
    authorsFromESPOL: '',
    contactAuthorName: '',
    contactAuthorSignature: '',
    contactAuthorRole: '',
    contactAuthorUnit: '',
    contactAuthorID: '',
    contactAuthorNationality: '',
    contactAuthorEmail: '',
    contactAuthorPhone: '',
    contactAuthorContributionType: '',
    contactAuthorContributionPercentage: '',
    contactAuthorIPAgreement: '',
    contactAuthorIPAgreementFile: null,
    otherAuthors: [],
    firstAuthorName: '',
    firstAuthorSignature: '',
    firstAuthorEntity: '',
    firstAuthorRole: '',
    firstAuthorID: '',
    firstAuthorNationality: '',
    firstAuthorEmail: '',
    firstAuthorPhone: '',
    firstAuthorContributionType: '',
    firstAuthorContributionPercentage: '',
    firstAuthorIPAgreement: '',
    firstAuthorIPAgreementFile: null,
    otherExternalAuthors: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleAuthorChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedAuthors = [...prevData.otherAuthors];
      updatedAuthors[index] = { ...updatedAuthors[index], [name]: value };
      return { ...prevData, otherAuthors: updatedAuthors };
    });
  };

  const handleAuthorFileChange = (e, index) => {
    const { name, files } = e.target;
    setFormData((prevData) => {
      const updatedAuthors = [...prevData.otherAuthors];
      updatedAuthors[index] = { ...updatedAuthors[index], [name]: files[0] };
      return { ...prevData, otherAuthors: updatedAuthors };
    });
  };

  const addAuthor = () => {
    setFormData((prevData) => ({
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

  const handleExternalAuthorChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedExternalAuthors = [...prevData.otherExternalAuthors];
      updatedExternalAuthors[index] = { ...updatedExternalAuthors[index], [name]: value };
      return { ...prevData, otherExternalAuthors: updatedExternalAuthors };
    });
  };

  const handleExternalAuthorFileChange = (e, index) => {
    const { name, files } = e.target;
    setFormData((prevData) => {
      const updatedExternalAuthors = [...prevData.otherExternalAuthors];
      updatedExternalAuthors[index] = { ...updatedExternalAuthors[index], [name]: files[0] };
      return { ...prevData, otherExternalAuthors: updatedExternalAuthors };
    });
  };

  const addExternalAuthor = () => {
    setFormData((prevData) => ({
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

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleExit = () => {
    setStep(1);
  };

  const handleSavePartial = () => {
    console.log('Saved partially:', formData);
    alert('Progreso guardado parcialmente.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL</h1>
        <h2>OTRI</h2>

        {step === 1 && (
          <div>
            <p>Este formulario tiene como objetivo suministrar a la Oficina de Transferencia de Resultados de Investigación (OTRI) de la ESPOL, la información necesaria para llevar a cabo la gestión de la protección de la Propiedad Intelectual como resultado de proyectos académicos, y proyectos de gestión educativa y administrativa</p>
            <p></p>
            <p>Este documento contiene datos sensibles y propietarios cuya divulgación no autorizada podría tener consecuencias adversas. Por lo tanto, se solicita a todos los receptores y manipuladores que toda la información contenida en este documento sea tratada con confidencialidad.</p>
            <p></p>
            <p>Por favor, una vez completado y firmado el documento por todos los autores e inventores, remita el mismo al correo: <a href="mailto:otri@espol.edu.ec">otri@espol.edu.ec</a></p>
            <label>
              <input
                type="checkbox"
                name="agreementAccepted"
                checked={formData.agreementAccepted}
                onChange={handleChange}
              />
              Acepto los términos y condiciones
            </label>
            <div className="button-group">
              <button
                type="button"
                onClick={handleNext}
                disabled={!formData.agreementAccepted}
                className={`next-button ${formData.agreementAccepted ? '' : 'disabled-button'}`}
              >
                Empezar Formulario
              </button>
            </div>
          </div>
        )}

        {step > 1 && (
          <>
          <FormNavBar step={step} setStep={setStep}/>

            <form onSubmit={handleSubmit} className="App-form">
              {step === 2 && (
                <NombreResultado formData={formData} handleChange={handleChange} handleExit={handleExit}/>
              )}
              {step === 3 && (
                <OrigenResultados formData={formData} handleChange={handleChange}/>
              )}
              {step === 4 && (
                <>
                  <div className="form-group">
                    <div>
                      <p style={{ color: 'blue' }}>Difusión del resultado del proyecto</p>
                    </div>
                    <label htmlFor="diffusion">¿Ha hecho algún tipo de difusión del resultado del proyecto?</label>
                    <p></p>
                    <select
                      id="diffusion"
                      name="diffusion"
                      value={formData.diffusion}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                    {formData.diffusion === 'Sí' && (
                      <>
                        <div className="form-group">
                          <p></p>
                          <label htmlFor="diffusionMedium">Medio de difusión:</label>
                          <p></p>
                          <input
                            type="text"
                            id="diffusionMedium"
                            name="diffusionMedium"
                            value={formData.diffusionMedium}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="diffusionDate">Fecha de difusión:</label>
                          <p></p>
                          <input
                            type="date"
                            id="diffusionDate"
                            name="diffusionDate"
                            value={formData.diffusionDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="diffusionContent">Contenido de la difusión:</label>
                          <textarea
                            id="diffusionContent"
                            name="diffusionContent"
                            value={formData.diffusionContent}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="diffusionImages">Adjuntar imágenes o documentos:</label>
                          <input
                            type="file"
                            id="diffusionImages"
                            name="diffusionImages"
                            multiple
                            onChange={handleFileChange}
                          />
                        </div>
                        {formData.diffusionImages.length > 0 && (
                          <div className="image-preview">
                            {formData.diffusionImages.map((file, index) => (
                              <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`preview ${index}`}
                                className="preview-image"
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLogFuture">¿Alguno de los autores/inventores realizará difusión de este resultado en los próximos 3 meses?</label>
                    <p></p>
                    <select
                      id="labLogFuture"
                      name="labLogFuture"
                      value={formData.labLogFuture}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLogStarted">¿Ha iniciado ya el proceso de difusión?</label>
                    <p></p>
                    <select
                      id="labLogStarted"
                      name="labLogStarted"
                      value={formData.labLogStarted}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p></p>
                    <label htmlFor="estado">Observaciones</label>
                    <textarea
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="Ingrese las observaciones"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLog1">¿Tiene conocimiento de que exista algún otro grupo (perteneciente o no a la ESPOL) que esté desarrollando líneas muy próximas a este resultado del proyecto?</label>
                    <p></p>
                    <select
                      id="labLog1"
                      name="labLog1"
                      value={formData.labLog1}
                      onChange={handleChange}
                      required
                    >
                      <option value="id¿¿">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p></p>
                    <label htmlFor="estado">Observaciones</label>
                    <textarea
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="Ingrese las observaciones"
                    ></textarea>
                  </div>

                </>
              )}
              {step === 5 && (
                <div className="form-group">
                  <div>
                    <p style={{ color: 'blue' }}>Recursos de fondos</p>
                  </div>
                  <label htmlFor="fundingRequired">¿El resultado del proyecto tuvo financiamiento?</label>
                  <p></p>
                  <select
                    id="fundingRequired"
                    name="fundingRequired"
                    value={formData.fundingRequired}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                  {formData.fundingRequired === 'Sí' && (
                    <div>
                      <label>Marque con una X el tipo de financiamiento:</label>
                      <p></p>
                      <label>
                        <input
                          type="checkbox"
                          name="fundingTypePublic"
                          checked={formData.fundingTypePublic}
                          onChange={handleCheckboxChange}
                        />
                        Público
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="fundingTypePrivate"
                          checked={formData.fundingTypePrivate}
                          onChange={handleCheckboxChange}
                        />
                        Privado
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="fundingTypeOthers"
                          checked={formData.fundingTypeOthers}
                          onChange={handleCheckboxChange}
                        />
                        Otros
                      </label>

                      <div className="form-group">
                        <label htmlFor="fundingAdmin">Por quién fueron administrados los fondos?</label>
                        <input
                          type="text"
                          id="fundingAdmin"
                          name="fundingAdmin"
                          value={formData.fundingAdmin}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subventionReference">Referencia/número de la subvención</label>
                        <input
                          type="text"
                          id="subventionReference"
                          name="subventionReference"
                          value={formData.subventionReference}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subventionTitle">Título de la subvención</label>
                        <input
                          type="text"
                          id="subventionTitle"
                          name="subventionTitle"
                          value={formData.subventionTitle}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sponsor">Patrocinador</label>
                        <input
                          type="text"
                          id="sponsor"
                          name="sponsor"
                          value={formData.sponsor}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="collaborators">Colaboradores</label>
                        <input
                          type="text"
                          id="collaborators"
                          name="collaborators"
                          value={formData.collaborators}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="startDate">Fecha de inicio</label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="endDate">Fecha de finalización</label>
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="obligations">Obligaciones con los patrocinadores</label>
                        <textarea
                          id="obligations"
                          name="obligations"
                          value={formData.obligations}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {step === 6 && (
                <div className="form-group">
                  <div>
                    <p style={{ color: 'blue' }}>RELACIÓN DE AUTORES/INVENTORES Y DECLARACIÓN DE PARTICIPACIONES EN EL RESULTADO DEL PROYECTO </p>
                  </div>
                  <label htmlFor="authorsFromESPOL">¿Los autores/inventores son de ESPOL?</label>
                  <p></p>
                  <select
                    id="authorsFromESPOL"
                    name="authorsFromESPOL"
                    value={formData.authorsFromESPOL}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                  {formData.authorsFromESPOL === 'Sí' && (
                    <div>
                      <h3>Datos del autor/inventor de contacto:</h3>
                      <div className="form-group">
                        <label htmlFor="contactAuthorName">Nombre</label>
                        <input
                          type="text"
                          id="contactAuthorName"
                          name="contactAuthorName"
                          value={formData.contactAuthorName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorSignature">Firma</label>
                        <input
                          type="text"
                          id="contactAuthorSignature"
                          name="contactAuthorSignature"
                          value={formData.contactAuthorSignature}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorRole">Cargo</label>
                        <select
                          id="contactAuthorRole"
                          name="contactAuthorRole"
                          value={formData.contactAuthorRole}
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
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorUnit">Unidad/Centro ESPOL</label>
                        <select
                          id="contactAuthorUnit"
                          name="contactAuthorUnit"
                          value={formData.contactAuthorUnit}
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
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorID">Cédula/Pasaporte</label>
                        <input
                          type="text"
                          id="contactAuthorID"
                          name="contactAuthorID"
                          value={formData.contactAuthorID}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorNationality">Nacionalidad</label>
                        <input
                          type="text"
                          id="contactAuthorNationality"
                          name="contactAuthorNationality"
                          value={formData.contactAuthorNationality}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorEmail">Correo Electrónico</label>
                        <input
                          type="email"
                          id="contactAuthorEmail"
                          name="contactAuthorEmail"
                          value={formData.contactAuthorEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorPhone">Teléfono</label>
                        <input
                          type="text"
                          id="contactAuthorPhone"
                          name="contactAuthorPhone"
                          value={formData.contactAuthorPhone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorContributionType">Tipo de contribución</label>
                        <input
                          type="text"
                          id="contactAuthorContributionType"
                          name="contactAuthorContributionType"
                          value={formData.contactAuthorContributionType}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorContributionPercentage">% de contribución en el resultado del proyecto</label>
                        <input
                          type="number"
                          id="contactAuthorContributionPercentage"
                          name="contactAuthorContributionPercentage"
                          value={formData.contactAuthorContributionPercentage}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactAuthorIPAgreement">¿Tiene contrato o acuerdo de Propiedad intelectual y confidencialidad firmado?</label>
                        <select
                          id="contactAuthorIPAgreement"
                          name="contactAuthorIPAgreement"
                          value={formData.contactAuthorIPAgreement}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccione una opción</option>
                          <option value="Sí">Sí</option>
                          <option value="No">No</option>
                        </select>
                        {formData.contactAuthorIPAgreement === 'Sí' && (
                          <div className="form-group">
                            <label htmlFor="contactAuthorIPAgreementFile">Subir archivo PDF firmado</label>
                            <input
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

                      {formData.otherAuthors.map((author, index) => (
                        <div key={index} className="form-group">
                          <h4>Autor</h4>
                          <div className="form-group">
                            <label htmlFor={`authorName${index}`}>Nombre</label>
                            <input
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
                            <input
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
                            <select
                              id={`authorIsStudent${index}`}
                              name={`authorIsStudent${index}`}
                              value={author.isStudent}
                              onChange={(e) => handleAuthorChange(e, index)}
                              required
                            >
                              <option value="">Seleccione una opción</option>
                              <option value="Sí">Sí</option>
                              <option value="No">No</option>
                            </select>
                            {author.isStudent === 'No' && (
                              <div className="form-group">
                                <label htmlFor={`authorRole${index}`}>Cargo</label>
                                <select
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
                                </select>
                              </div>
                            )}
                          </div>
                          <div className="form-group">
                            <label htmlFor={`authorUnit${index}`}>Unidad/Centro ESPOL</label>
                            <select
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
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor={`authorID${index}`}>Cédula/Pasaporte</label>
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <select
                              id={`authorIPAgreement${index}`}
                              name={`authorIPAgreement${index}`}
                              value={author.ipAgreement}
                              onChange={(e) => handleAuthorChange(e, index)}
                              required
                            >
                              <option value="">Seleccione una opción</option>
                              <option value="Sí">Sí</option>
                              <option value="No">No</option>
                            </select>
                            {author.ipAgreement === 'Sí' && (
                              <div className="form-group">
                                <label htmlFor={`authorIPAgreementFile${index}`}>Subir archivo PDF firmado</label>
                                <input
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
                      <button type="button" onClick={addAuthor}>Añadir otro autor/inventor</button>
                    </div>
                  )}
                  {formData.authorsFromESPOL === 'No' && (
                    <div>
                      <h3>Datos del primer autor/inventor:</h3>
                      <div className="form-group">
                        <label htmlFor="firstAuthorName">Nombre</label>
                        <input
                          type="text"
                          id="firstAuthorName"
                          name="firstAuthorName"
                          value={formData.firstAuthorName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorSignature">Firma</label>
                        <input
                          type="text"
                          id="firstAuthorSignature"
                          name="firstAuthorSignature"
                          value={formData.firstAuthorSignature}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorEntity">Entidad/Empresa</label>
                        <input
                          type="text"
                          id="firstAuthorEntity"
                          name="firstAuthorEntity"
                          value={formData.firstAuthorEntity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorRole">Cargo</label>
                        <input
                          type="text"
                          id="firstAuthorRole"
                          name="firstAuthorRole"
                          value={formData.firstAuthorRole}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorID">Cédula/Pasaporte</label>
                        <input
                          type="text"
                          id="firstAuthorID"
                          name="firstAuthorID"
                          value={formData.firstAuthorID}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorNationality">Nacionalidad</label>
                        <input
                          type="text"
                          id="firstAuthorNationality"
                          name="firstAuthorNationality"
                          value={formData.firstAuthorNationality}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorEmail">Correo Electrónico</label>
                        <input
                          type="email"
                          id="firstAuthorEmail"
                          name="firstAuthorEmail"
                          value={formData.firstAuthorEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorPhone">Teléfono</label>
                        <input
                          type="text"
                          id="firstAuthorPhone"
                          name="firstAuthorPhone"
                          value={formData.firstAuthorPhone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorContributionType">Tipo de contribución</label>
                        <input
                          type="text"
                          id="firstAuthorContributionType"
                          name="firstAuthorContributionType"
                          value={formData.firstAuthorContributionType}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorContributionPercentage">% de contribución en el resultado del proyecto</label>
                        <input
                          type="number"
                          id="firstAuthorContributionPercentage"
                          name="firstAuthorContributionPercentage"
                          value={formData.firstAuthorContributionPercentage}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="firstAuthorIPAgreement">¿Tiene contrato o acuerdo de Propiedad intelectual y confidencialidad firmado?</label>
                        <p></p>
                        <select
                          id="firstAuthorIPAgreement"
                          name="firstAuthorIPAgreement"
                          value={formData.firstAuthorIPAgreement}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccione una opción</option>
                          <option value="Sí">Sí</option>
                          <option value="No">No</option>
                        </select>
                        {formData.firstAuthorIPAgreement === 'Sí' && (
                          <div className="form-group">
                            <label htmlFor="firstAuthorIPAgreementFile">Subir archivo PDF firmado</label>
                            <p></p>
                            <input
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
                      {formData.otherExternalAuthors.map((author, index) => (
                        <div key={index} className="form-group">
                          <div className="form-group">
                            <h4>Autor</h4>

                            <label htmlFor={`externalAuthorName${index}`}>Nombre</label>
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <select
                              id={`externalAuthorIPAgreement${index}`}
                              name={`externalAuthorIPAgreement${index}`}
                              value={author.ipAgreement}
                              onChange={(e) => handleExternalAuthorChange(e, index)}
                              required
                            >
                              <option value="">Seleccione una opción</option>
                              <option value="Sí">Sí</option>
                              <option value="No">No</option>
                            </select>
                            {author.ipAgreement === 'Sí' && (
                              <div className="form-group">
                                <label htmlFor={`externalAuthorIPAgreementFile${index}`}>Subir archivo PDF firmado</label>
                                <p></p>
                                <input
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
                      <button type="button" onClick={addExternalAuthor}>Añadir otro autor/inventor</button>
                    </div>
                  )}
                </div>
              )}


              <div className="button-group">
                {step > 2 && (
                  <button type="button" onClick={handleBack} className="back-button">
                    Atrás
                  </button>
                )}
                {step < 15 && (
                  <button type="button" onClick={handleNext} className="next-button">
                    Siguiente
                  </button>
                )}
                {step === 15 && (
                  <button type="submit" className="submit-button">
                    Guardar y Enviar
                  </button>
                )}
                <button type="button" onClick={handleSavePartial} className="save-partial-button">
                  Guardar Parcial
                </button>
              </div>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

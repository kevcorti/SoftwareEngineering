import { Select, Input, Textarea} from "@headlessui/react";

export default function(props){
    const handleChange = (e) => {
        props.handleChange(e);
    }
    const handleCheckboxChange = (e) => {
        props.handleCheckboxChange(e);
    }

    return(
        <div className="form-group">
        <div>
          <p style={{ color: 'blue' }}>Recursos de fondos</p>
        </div>
        <label htmlFor="fundingRequired">¿El resultado del proyecto tuvo financiamiento?</label>
        <p></p>
        <Select
          id="fundingRequired"
          name="fundingRequired"
          value={props.formData.fundingRequired}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </Select>
        {props.formData.fundingRequired === 'Sí' && (
          <div>
            <label>Marque con una X el tipo de financiamiento:</label>
            <p></p>
            <label>
              <Input
                type="checkbox"
                name="fundingTypePublic"
                checked={props.formData.fundingTypePublic}
                onChange={handleCheckboxChange}
              />
              Público
            </label>
            <label>
              <Input
                type="checkbox"
                name="fundingTypePrivate"
                checked={props.formData.fundingTypePrivate}
                onChange={handleCheckboxChange}
              />
              Privado
            </label>
            <label>
              <Input
                type="checkbox"
                name="fundingTypeOthers"
                checked={props.formData.fundingTypeOthers}
                onChange={handleCheckboxChange}
              />
              Otros
            </label>

            <div className="form-group">
              <label htmlFor="fundingAdmin">Por quién fueron administrados los fondos?</label>
              <Input
                type="text"
                id="fundingAdmin"
                name="fundingAdmin"
                value={props.formData.fundingAdmin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subventionReference">Referencia/número de la subvención</label>
              <Input
                type="text"
                id="subventionReference"
                name="subventionReference"
                value={props.formData.subventionReference}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subventionTitle">Título de la subvención</label>
              <Input
                type="text"
                id="subventionTitle"
                name="subventionTitle"
                value={props.formData.subventionTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sponsor">Patrocinador</label>
              <Input
                type="text"
                id="sponsor"
                name="sponsor"
                value={props.formData.sponsor}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="collaborators">Colaboradores</label>
              <Input
                type="text"
                id="collaborators"
                name="collaborators"
                value={props.formData.collaborators}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Fecha de inicio</label>
              <Input
                type="date"
                id="startDate"
                name="startDate"
                value={props.formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">Fecha de finalización</label>
              <Input
                type="date"
                id="endDate"
                name="endDate"
                value={props.formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="obligations">Obligaciones con los patrocinadores</label>
              <Textarea
                id="obligations"
                name="obligations"
                value={props.formData.obligations}
                onChange={handleChange}
                required
              ></Textarea>
            </div>
          </div>
        )}
      </div>
    );
}
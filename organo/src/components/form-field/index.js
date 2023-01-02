import './form-field.css'

const FormField = (props) => {
    return (
        <div className="form-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    );
}

export default FormField;
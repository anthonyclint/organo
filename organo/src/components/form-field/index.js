import './form-field.css'

const FormField = (props) => {

    const typing = (event) => {
        props.changed(event.target.value);
    }

    return (
        <div className="form-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.mandatory} placeholder={props.placeholder}></input>
        </div>
    );
}

export default FormField;
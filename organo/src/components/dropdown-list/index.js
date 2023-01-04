import './dropdown-list.css';

const DropdownList = (props) => {



    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={event => props.changed(event.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropdownList;
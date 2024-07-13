import './DropdownList.css'

const DropdownList = ({ label, items, value, whenChanged, required = false }) => {
    
    const whenSelected = (event) => {
        whenChanged(event.target.value)
    }

    return (
        <div className='dropdown-list'>
            <label>
                {label}
            </label>
            <select 
                onChange={whenSelected}
                required={required}
                value={value}>
                <option />
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList
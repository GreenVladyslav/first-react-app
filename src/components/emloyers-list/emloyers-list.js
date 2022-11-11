import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
/* вытащили id, а остальные три свойства осталось в itemProps */
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}/>
                /* event.currentTarget нам нужен вместо обычного event.turget чтобы невилировать всплытие события и получать только тот элемент который нам действительно нужен */
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;
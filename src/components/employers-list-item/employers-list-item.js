import './employers-list-item.css';

const EmployersListItem = (props) => {

    // const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let increaseClass = "list-group-item d-flex justify-content-between";

    if (increase === true) {
        // activeClass = "list-group-item d-flex justify-content-between increase"
        increaseClass += " increase"
    }

    if (rise) {
        increaseClass += ' like'
    }

    return(
        <li className={increaseClass}>
            <span className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise"
                /* style={{fontSize: 40, color: 'red', transition: 'all', WebkitTransition: 'all', msTransition: 'all'}} */>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" 
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>
                
                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;
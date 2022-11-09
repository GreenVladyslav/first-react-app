import { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor (props) {
        super(props);
        this.state = { /* создали внутриние состояние */
            increase: false,
            rise: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    };

    onLike = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    // onIncrease = () => { /* другой синаксис без диструктуризации */
    //     this.setState(state => ({
    //         increase: !state.increase  /* противоположное состояние работает как toggle */
    //     }))
    // }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, rise} = this.state; /* диструктуризация на props, а внутренего состояния (state) создали внутриние состояние */

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
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
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
}

export default EmployersListItem;
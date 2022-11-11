import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        // {name: 'all', label: 'Все сотрудники'},
        // {name: 'rise', label: 'На повышение'},
        // {name: 'moreThen1000', label: 'З/П больше 1000$'}
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'З/П больше 1000$', colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => { /* динамически класс */
        const active = props.filter === name; /* if (props.filter === name) {return true = active} */
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        const style = colored ? {color: 'red'} : null
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    style={style}>
                    {label}
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;


// import { Component } from 'react';

// import './app-filter.css';

// class AppFilter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: ''
//         }
//     }

//     onUpdateFilterEmpEvent = (event) => {
//         const filter = event.currentTarget.getAttribute('data-filter');
//         this.setState({filter})
//         this.props.onUpdateFilterEmp(filter);
//     }

//     render() {

//         // const {filter} = this.state.filter;

//         let className = 'btn btn-outline-light';
//         let activeClass = 'btn btn-light';
//         // if (filter === 'rise') {
//         //     className += className.slice(0, 3) + ' btn-light';
//         // } else if (filter === 'salary') {
//         //     className += className.slice(0, 3) + ' btn-light';
//         // } else if (filter === 'all') {
//         //     className += className.slice(0, 3) + ' btn-light';
//         // }
//         return(
//             <div className="btn-group">
//                 <button 
//                     className={className}
//                     type="button"
//                     onClick={this.onUpdateFilterEmpEvent}
//                     data-filter="all">
//                         Все сотрудники
//                 </button>
//                 <button 
//                     className={activeClass} 
//                     type="button"
//                     onClick={this.onUpdateFilterEmpEvent}
//                     data-filter="rise">
//                         На повышение
//                 </button>
//                 <button 
//                     className={className}
//                     type="button"
//                     onClick={this.onUpdateFilterEmpEvent}
//                     data-filter="salary">
//                         З/ П больше 1000$
//                 </button>
//             </div>
//         );
//     }
// }

// export default AppFilter;
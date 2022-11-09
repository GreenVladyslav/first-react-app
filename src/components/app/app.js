import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/emloyers-list';
import EmployersAddForm from '../emloyers-add-form/emloyers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Justin .G', salary: 800, increase: false, id: 1},
                {name: 'Alex P.', salary: 3000, increase: false, id: 2},
                {name: 'Anderson S.', salary: 5000, increase: true, id: 3},
                {name: 'Jake P.', salary: 100, increase: false, id: 4},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id) /* index того обьекта который нам нужно удалить */
            
            // const newArr = data.filter(item => item.id !== id);
            // const before = data.slice(0, index); /* 1 часть массива */
            // const after = data.slice(index + 1) /* 2 часть массива */

            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        const {data} = this.state;

        return(
            <div className="app">
                <AppInfo/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm/>
            </div>
        );
    }
}

export default App;
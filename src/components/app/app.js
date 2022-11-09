import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/emloyers-list';
import EmployersAddForm from '../emloyers-add-form/emloyers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Justin .G', salary: 800, increase: false, id: 1},
        {name: 'Alex P.', salary: 3000, increase: false, id: 2},
        {name: 'Anderson S.', salary: 5000, increase: true, id: 3},
        {name: 'Jake P.', salary: 100, increase: false, id: 4},

    ]

    return(
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;
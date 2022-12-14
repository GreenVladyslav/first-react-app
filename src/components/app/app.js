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
                {name: 'Justin .G', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex P.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Anderson S.', salary: 5000, increase: true, rise: false, id: 3},
                {name: 'Jake P.', salary: 100, increase: false, rise: false, id: 4},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5
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
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]; /* data.concat(newItem) */
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase} /* все свойства которые есть в обьекте они развернутся и сформируют новый обьект */
    //     //     /* {обьект, дальше свойство incre заменит в этом обькте Incr Только с другими данными(true или false)} */
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     //     /* [... все обькты до измененного, добавлили измененный, добавляем все остальные обьекты кроме измененного(он по середи)] */
    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })
    //     this.setState(({data}) => ({ /* item будет каждый отдельный оюбект внутри массива (()скобки вместо return) */
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase} /* !item.increase (true = false, false = true) */
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({ 
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {  /* оптимизация сразу для двух методов */
        this.setState(({data}) => ({ 
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1 /* Если найдено вернет индекс где было найдено (вернет массив)term - кусочек строки */
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise === true);
            case 'moreThen1000':
                return items.filter(item => item.salary >= 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    // filterEmp = (items, filter) => {
    //     if (filter === "rise") {
    //         return items.filter(item => {
    //             return item.rise === true
    //         })
    //     } else if (filter === "salary") {
    //         return items.filter(item => {
    //             return item.salary >= 1000
    //         })
    //     } else if (filter === "all") {
    //         return items;
    //     }
    // }

    // onUpdateFilterEmp = (filter) => {
    //     this.setState({filter});
    // }


    render() {
        const {data, term, filter} = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase === true).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); /* отфильтрованый массив который приходит по строчке из другого компонента */
        /* Сначала у нас идет филтрацию по поиску, а затем по филтьтру в итоге получаем комбинированый результат  */
        return(
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
                
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
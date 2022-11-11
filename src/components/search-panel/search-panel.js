import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchInput = (event) => { /* onUpdateSearchInput работает локально */
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term) /* onUpdateSearch приходит из друго-го компанента */
    }

    render() {
        return(
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearchInput}/>
        );
    }
}

export default SearchPanel;
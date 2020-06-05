import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

interface IAppState {
    monsters: Array<{ name: string, id: string }>;
    searchField: string
}

class App extends Component<{}, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        }

    }

    handleChange = (e:any) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='Search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response: any) => response.json())
            .then(users => this.setState({monsters: users}))
    }
}

export default App;

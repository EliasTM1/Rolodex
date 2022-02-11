import React, { Component } from 'react';
// * Components
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search/search.component'

// * Styles
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      searchField: '',
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { searchField, monsters } = this.state;
    const mostroFiltrado = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>ROLODEX</h1>
          <SearchBox
            placeholder='Search Monsters'
            handleChange={e => this.setState({ searchField: e.target.value })}
          />
          <CardList
            monsters={mostroFiltrado}
          />


          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'POLLOS' })}>Change the state</button>
        </header>

      </div>
    )
  }
}



// function App() 
export default App;

import React from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
//import {robots} from '../robots.js'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users => {
            users[0].id = "PDN.png";
            this.setState({robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(robots.length === 0) {
            return <h1>Loading</h1>
        } 
        else {
            return (
                <div className = 'tc'>
                    <h1 className='f1'>Cute Kitties</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
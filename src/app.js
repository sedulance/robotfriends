import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./searchbox";


class App extends Component {
    constructor() {

        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChage = (event) => {
        this.setState({ searchfield: event.target.value })
            
           
    }
    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());      
        })
        return (
            <div className= 'tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChage}/>
            <CardList robots={filteredRobots} />
            </div>
        );

    }
 
}


export default App;
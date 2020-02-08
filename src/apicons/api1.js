import React, {Component} from 'react';
import Contacts from './contacts1';

class App extends Component {

    render() {
        return (
            <Contacts contacts={this.state.contacts}/>
        )
    }
// robie kolejną zmianę dla prób//
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }
    //cos zmieniam, dodaje linie do branch//

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    }
}

export default App;
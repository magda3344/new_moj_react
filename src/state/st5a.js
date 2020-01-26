import React from 'react'; //to samo co 5, tylko wyniesienie stanu do góry//

class Person extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.passed}>Display Age</button>
            </div>
        );
    }
}

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 20
        }
    }


    display = () => {
        console.log(this.state.age)
    }
    render() {
        return (
            <div>
                <Person passed={this.display}></Person>
            </div>
        );
    }

}


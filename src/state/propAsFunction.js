import React from 'react';

class Car extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.clickProp}>Uruchom pojazd</button>
            </div>
        );
    }
}

export default class Garage extends React.Component { //komponent nadrzędny//

    handleClick = () => {
        console.log('Kliknieto')
    }

    render() { //tu tworzony jest props//
        return (
            <div>
                <Car clickProp={this.handleClick}/>
            </div>
        );
    }
}
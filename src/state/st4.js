import React from "react";

class Car extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={
            brand:"Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            address: {
                street: 123,
                no: 32136
            },
            counter: 0
        };
    }
    changeColor=(color)=>{
        this.setState({counter: this.state.counter +1, color: color});
    }
    requestColor =()=>{
        var color = prompt("Wpisz kolor");
        this.changeColor(color);
    }
render(){
        return(
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.</p>
                <button type="button" onClick={this.requestColor}>Wpisz kolor</button>
                <button type="button" onClick={this.props.runEngine}>Uruchom pojazd</button>
                <p> Klinknięto {this.state.counter} razy.</p>
            </div>
        );
}
}
export default class Garage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            counterGarage: 0
        };
    }
    handleClick=()=>{
        this.setState({counterGarage: this.state.counterGarage+1});
    }
    render(){
        return(
            <div>
                <Car runEngine={this.handleClick}/>
                <p>Uruchomiono {this.state.counterGarage} razy </p>

            </div>
        );
    }
}
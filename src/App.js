import React, { Component } from 'react';
import {Input} from './components/Input';
import Keypad from './components/Keypad';
import { evaluate } from 'mathjs';
import './App.css';

class App extends Component {

    // The functions that need to have:
    
    // 1) getInput  2) compute the input 3)clear the input 



    // 3) State is Input and make sure add the state to this App class 

    constructor(props){
        super(props)

        this.state = {
            input: ''
        }

        this.getInput = this.getInput.bind(this)
        this.compute = this.compute.bind(this)
        this.clear = this.clear.bind(this)
    }


    getInput(value){
        this.setState({
            input: this.state.input + value
        })
    }

    compute(){
        this.setState({
            input: evaluate(this.state.input)
        })
    }

    clear(){
        this.setState({
            input: ''
        })
    }


    render(){
        return(
            <div className="app">
                <div className="calc-wrapper">
                {/* Write code below  */}
                <Input getInput={this.state.input}/>
                <Keypad getInput={(val) => this.getInput(val)} compute={this.compute} clear={this.clear}/>
                </div>
            </div>
        )
    }
}

export default App;
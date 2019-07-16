import React, { Component } from 'react';
import Button from './Button';
import {ClearButton} from './ClearButton';



class Keypad extends Component{

    // constructor(...props){
    //     super(...props);
    // }

    render(){
        return(
            <div>
               <div className="row">
                 <Button handleClick={this.props.getInput}>7</Button>
                 <Button handleClick={this.props.getInput}>8</Button>
                 <Button handleClick={this.props.getInput}>9</Button>
                 <Button handleClick={this.props.getInput}>*</Button>
               </div>
               <div className="row">
                 <Button handleClick={this.props.getInput}>4</Button>
                 <Button handleClick={this.props.getInput}>5</Button>
                 <Button handleClick={this.props.getInput}>6</Button>
                 <Button handleClick={this.props.getInput}>/</Button>
               </div>
              <div className="row">
                 <Button handleClick={this.props.getInput}>1</Button>
                 <Button handleClick={this.props.getInput}>2</Button>
                 <Button handleClick={this.props.getInput}>3</Button>
                 <Button handleClick={this.props.getInput}>+</Button>   
              </div>
              <div className="row">
                 <Button handleClick={this.props.getInput}>.</Button>
                 <Button handleClick={this.props.getInput}>0</Button>
                 <Button handleClick={this.props.compute}>=</Button>
                 <Button handleClick={this.props.getInput}>-</Button>
              </div>
              <div className="row">
                <ClearButton clearInput={this.props.clear}/>
            </div>
          </div>
        )
    }
}

export default Keypad;
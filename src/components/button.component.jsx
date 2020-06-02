import React from 'react'
import {FaHotdog} from 'react-icons/fa'

class Button extends React.Component{

    handleClick(){
        this.props.handleClick();
    }

 render(){
    return(
        <div className="text-center">
        <button className="button-primary" onClick={this.handleClick.bind(this)}>
         Get Meal <FaHotdog />
         </button>
         </div>
    );
 }

}

export default Button;
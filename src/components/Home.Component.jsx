import React, { Component } from 'react'
import Meal from './Meal.component'
import {FaHeart} from 'react-icons/fa'

 class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                 <h3>
                     Feeling Hungry?
                 </h3>
                 <h5>
                     Get a random meal by clicking the button below
                 </h5>
                </div>

                <Meal />
                <br />
                <span className="steve">Made with <FaHeart className="icon"/> by Emmysteve</span>
            </div>
        )
    }
}

export default Home;

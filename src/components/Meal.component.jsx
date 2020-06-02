import React, { Component } from 'react'
import MealBox from './MealBox.component'
import Button from './button.component'

export default class Meal extends Component {
    constructor(){
        super();

        this.state = {
            ingredients : [],
            img : '',
            category : '',
            area : '',
            tags : '',
            meal : '',
            instructions : '',
            youtube : '',
            listner : 0
        };
    }

    handleClick(){
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
           .then(res => res.json())
           .then(res => {
               this.createMeal(res.meals[0]);
           });
    }

    createMeal = (meal) => {
        let ingredients = [];
       //get all ingreds from the object. up to 20
       for(let i=1; i<=20; i++){
           if(meal[`strIngredient${i}`]){
               ingredients.push(`${meal[`strIngredient${i}`]} - 
               ${meal[`strMeasure${i}`]}`)
           }
           else{
               break;
           }
       }

       this.setState({
           ingredients : ingredients,
           img : meal.strMealThumb,
           category : meal.strCategory,
           area : meal.strArea,
           tags : meal.strTags,
           meal : meal.strMeal,
           instructions : meal.strInstructions,
           youtube : meal.strYoutube,
           listner : 1
        });
    }

    render() {
        return (
            <div id="meal" className="row meal">
                <Button handleClick = {this.handleClick.bind(this)}/>
                    <br/>
                    <br />
                 <MealBox 
                   ingredients = {this.state.ingredients}
                   img = {this.state.img}
                   category = {this.state.category}
                   area = {this.state.area}
                   tags = {this.state.tags}
                   meal = {this.state.meal}
                   instructions = {this.state.instructions}
                   youtube = {this.state.youtube} 
                   listner = {this.state.listner}              
                 />
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class MealBox extends Component {

    
    render() {
        // const maping = this.props.ingredients.map(ingredient => {
        //     console.log(ingredient);
        // })
        let getel1 = document.getElementById('imgdiv');
        let getel2 = document.getElementById('ing');
        let getel3 = document.getElementById('vid');
        let vidwrap = document.getElementById('vidwrap');
        if(this.props.listner === 1){
            getel1.style.display='block';
            getel2.style.display='block';
            getel3.style.display='block';
            vidwrap.style.height="300px";
        }

        const image = <img src={this.props.img} alt="Meal"/>;
        const category = <p><strong>Category : </strong> {this.props.category}</p>;
        const area = <p><strong>Area : </strong> {this.props.area}</p>;
        const tags = <p><strong>Tags : </strong> {this.props.tags? this.props.tags.split(',').join(', ') : this.props.tags}</p>;
        const ingredlist = this.props.ingredients.map((ingredient) => 
            <li key={ingredient.toString()}> {ingredient} </li>);
       const youtube = <div className="row">
       <h5 id='vid'>Video Recipe </h5>
       <div className="videoWrapper" id="vidwrap">
         <iframe width="420" height="300" src={`https://youtube.com/embed/${this.props.youtube.slice(-11)}`} title="Video recipe">
         </iframe>
       </div>  
       </div>
   
  
        return (
            <>
            <div className="row">
                <div className="columns five">
                    <div id="imgdiv" className="imageCont">
                    {
                       this.props.img ? image : ''
                    }
                    </div>
                    
                   {
                      this.props.category 
                       ? category
                       : ''
                   }

                    {
                      this.props.area 
                       ? area
                       : ''
                   }

                  {
                      this.props.tags 
                       ? tags
                       : ''
                   }


                <h5 id="ing"> Ingredients : <br/> </h5>
                       

                   <ul>
                   {ingredlist  }
                   </ul>

                </div>
                <div className="column seven">
                <h4>{this.props.meal}</h4>
                <p>{this.props.instructions}</p>
                </div>
                
            </div>

            {
              youtube ?
               youtube
               : 
               ''
            }
            
         </>
        )
    }
}

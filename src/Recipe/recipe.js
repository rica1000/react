
import React from 'react';
import ReactDOM from 'react-dom';   
import reciper from '../img/recipe.png';
import "./recipe.css";
import Ingredient from '../Ingredient/Ingredient';
import Update from '../Update/Update';

class Recipe extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            ingredients : localStorage.getItem(this.props.name),
            more : false,
            toupdate : () => {
                return <Update/>}
        }
        this.add = this.add.bind(this);
        this.deleterecipe = this.deleterecipe.bind(this);
    }
    add(){
        const more = this.state.more;
        if(more === false){
            const arr = JSON.parse(this.state.ingredients);
        const list = arr.map(item => {
            return <Ingredient label = {item.label} 
            quantity = {item.quantity} unity={item.unity}/>
        })
        ReactDOM.render(<div>{list}</div>,document.getElementById(this.state.name))
        this.state.more = true;
        document.getElementById("b"+this.state.name).innerHTML = "Less ...";
        }else{
            ReactDOM.render(<p></p>,document.getElementById(this.state.name));
            document.getElementById("b"+this.state.name).innerHTML = "More ...";
            this.state.more = false;
        }
        
    }
    deleterecipe(){
        localStorage.removeItem(this.state.name)
        let listrecipe = localStorage.getItem("listrecipe");
        let array = [];
        array = JSON.parse(listrecipe);
        array.splice(array.indexOf(this.state.name),1);
        localStorage.setItem("listrecipe",JSON.stringify(array));
        window.location.reload(false);
    }
    render()
        {
 
        return(
            <div class="recipe">
                <img src={reciper} alt="recipe" width="320px" height="320px"/>
                <p>{this.state.name}</p>
                <div id={this.state.name}></div>
                <button classname="recbut" id={"b"+this.state.name}onClick={this.add}>More ...</button>
                <button classname="recbut" onClick={this.deleterecipe}>Remove</button>
            </div>
            )
        }
    
}
export default Recipe;
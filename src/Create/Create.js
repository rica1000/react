import React from 'react'
import ReactDOM from 'react-dom';
import './Create.css'

class Create extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recipe:'',
            ingredients:[],
            ingredient:{
                label:'',
                quantity:'',
                unity:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleInputrecipe = this.handleInputrecipe.bind(this);
        this.AddIng = this.AddIng.bind(this);
        this.Confirme = this.Confirme.bind(this);
        this.empty = this.empty.bind(this);
    }
     AddIng(){        
        const newingredient = this.state.ingredient;
        if(newingredient.label !== "" && newingredient.quantity !== ""
            && newingredient.unity !== ""){
                const newingredients = [...this.state.ingredients,newingredient];
                this.setState({
                    ingredients:newingredients,
                    ingredient:{
                        label:'',
                        quantity:'',
                        unity:'',
                        key:''
                    }
                })
            }else{
                alert("Please fill ")
            }
    }
    Confirme(e){
        //Create a list of recipes or Add recipes into a list created 
        //(localstorage)
        let array = [];
        array = [...this.state.ingredients];

        if(array.length>0){
            let tabrecip = localStorage.getItem("listrecipe");
            if(tabrecip !== null){
                let arr = [];
                arr = JSON.parse(tabrecip);
                arr = [...arr,this.state.recipe];
                let arruniq = Array.from(new Set(arr));
                localStorage.setItem("listrecipe",JSON.stringify(arruniq));
            }else{
                let arr = [this.state.recipe]
                localStorage.setItem("listrecipe",JSON.stringify(arr));
        }
        localStorage.setItem(this.state.recipe,JSON.stringify(this.state.ingredients));
        alert('Recipe added successfully!')
        this.state.ingredients = [];
        }else alert('Enter at least one ingredient');
        window.location.reload(false);
    }
 
     handleInput(e){        
        this.setState({
                ingredient:{
                    label : e.target.value,
                    quantity : this.state.ingredient.quantity,
                    unity : this.state.ingredient.unity,
                    key:Date.now() 
                }
        })
    }
     handleInput1(e){        
        this.setState({
                ingredient:{
                    label:this.state.ingredient.label,
                    quantity : e.target.value,
                    unity : this.state.ingredient.unity,
                    key : this.state.ingredient.key
                }
        })
    }
     handleInput2(e){        
        this.setState({
            ingredient:{
                label:this.state.ingredient.label,
                quantity : this.state.ingredient.quantity,
                unity : e.target.value,
                key : this.state.ingredient.key
            }
    })
    }
    handleInputrecipe(e){
        this.setState({
            recipe : e.target.value
        })
        
    }
    empty(e){
        if(this.state.recipe === "")
        document.getElementById(e.target.id).id = "error"
        else 
        document.getElementById(e.target.id).id = "rcp"
    }

    uploadfilehandler(e){
        console.log(e.target.files[0])
    }
    render(){
        return(
            <div id="newrecipe">
                <input id ="rcp" onKeyUp = {this.empty} placeholder="Enter the name of the recipe..." type="text" value={this.state.recipe}
                    onChange={this.handleInputrecipe}/>
                <div id = "ings">
                    <p>Adding ingredients to the recipe</p>
                    
                        <input className="cing" type="text" value={this.state.ingredient.label}
                        onChange={this.handleInput} placeholder="Name of the ingredient..."/>
                        <br/>
                    
                        <input className="cing" type="text" value={this.state.ingredient.quantity}
                        onChange={this.handleInput1} placeholder="Quantity of the ingredient..."/>
                        <br/>
                    
                        <input className="cing" type="text" value={this.state.ingredient.unity}
                        onChange={this.handleInput2} placeholder="Unity of the ingredient..."/>
                        <br/>
                    
                    <button id="next" className="cing" onClick={this.AddIng}>SAVE INGREDIENT</button>
                </div>
               <button id="save" onClick={this.Confirme}>SAVE</button>
                <div id="newingredients">
    
                </div>
            </div>
            
        )
    }
}


export default Create;
import React from 'react'
import ReactDOM from 'react-dom'
import './Update.css'

class Update extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recipe:"",
            array:[]
        }
        this.Search = this.Search.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.updatlabel = this.updatlabel.bind(this)
        this.updatquantity = this.updatquantity.bind(this)
        this.updatunity = this.updatunity.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)
        this.addAll = this.addAll.bind(this);
    }
    updatlabel(e){
        //get changed label value and put it in the array state
        var i = e.target.className;
        this.state.array[i].label = e.target.value;

    }
    updatquantity(e){
        //get changed quantity value and put it in the array state
        var i = e.target.className;
        this.state.array[i].quantity = e.target.value;

    }
    addAll(){
        var arr = [...this.state.array];
        localStorage.setItem(this.state.recipe,JSON.stringify(arr));
    }
    deleteIngredient(e){
        this.state.array.splice(e.target.className,1);
        var arr = [...this.state.array];
        if(arr.length > 0)
        localStorage.setItem(this.state.recipe,JSON.stringify(arr));
        else {
            var oldrecipe = this.state.recipe;
            localStorage.removeItem(this.state.recipe);
            this.state.recipe = oldrecipe;
        }
        

        this.Search();
    }
    updatunity(e){
        //get changed unity value and put it in the array state
        
        var i = e.target.className;
        this.state.array[i].unity = e.target.value;
    }
    Search(){   
        let recipe = localStorage.getItem(this.state.recipe)
        if(recipe !== null){
            let arr = []
            arr = JSON.parse(recipe);
        
        //Copy array from localstorage to array state
       this.state.array = Array.from(new Set(arr));
         var list = arr.map((item,i) => {
            return <div>
                        <input type="text" className={i} onChange={this.updatlabel}
                        defaultValue = {item.label} />
                        <input type="text" className={i} onChange={this.updatquantity}
                        defaultValue = {item.quantity} />
                        <input type="text" className={i} onChange={this.updatunity}
                        defaultValue = {item.unity} />
                        <button className={i} onClick={this.deleteIngredient}>DELETE</button>
                    </div>
        })
    ReactDOM.render(<div>{list}<button onClick={this.addAll} id="bsv">SAVE</button>
                    </div>,document.getElementById("result"))
        }
        else {
                alert('Recipe doesn\'t exist');
                ReactDOM.render(<p></p>,document.getElementById("result"));
        }
        
    }
    handleSearch(e){
        this.setState({
           recipe : e.target.value
        })
        ReactDOM.render(<p></p>,document.getElementById("result"))
    }
    render(){
        return(
            <div id="uupd">
                <input placeholder="e.g chiken" className="cing" type="text" name="searchText" value={this.state.recipe}
                onChange={this.handleSearch}/>
                <button id="bsearch" className="cing" onClick={this.Search}>SEARCH</button>
                <div id="result"></div>
            </div>
        )
    }
}

export default Update;
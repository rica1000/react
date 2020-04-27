import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from '../Recipe/recipe';
import "./Consult.css";


class Consult extends React.Component{
    constructor(props){
        super(props)
        this.refresh = this.refresh.bind(this);
    }
    refresh(){
        const listrecipe = localStorage.getItem("listrecipe");
        const arr = JSON.parse(listrecipe);
        if(arr !== null){
            var list = arr.map(item => {
                return <Recipe name={item}/> 
            })
            ReactDOM.render(<div>{list}</div>,document.getElementById("recipes"));
        }else{
            alert('Please Create a Recipe first');  
        }
    }
    componentDidMount(){
        this.refresh();
    }
    render(){
        return <div id="recipes"></div>
    }
}

export default Consult;
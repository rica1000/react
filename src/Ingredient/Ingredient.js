import React from 'react';

class Ingredient extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label : props.label,
            quantity : props.quantity,
            unity : props.unity
        }
    }
    render(){
        return(
            <div>
                <p>* {this.state.quantity} {this.state.unity}   
                 {" of "+this.state.label} </p>
            </div>
        )

    }
}
export default Ingredient;
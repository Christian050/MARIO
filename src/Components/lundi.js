import React,{Component}from "react";

class Lundi extends Component{
    state={
        count:0,
        imageUrl:"https://picsum.photos/200"
    };
    render(){
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span>{this.formatCount()}</span>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increament</button>
            </div>
        );
    }
    formatCount(){
        const{count}=this.state;

        const x = <h1>Zero</h1>;
        return count ===0? <h1>Available</h1>:count
    }
}

export default Lundi;
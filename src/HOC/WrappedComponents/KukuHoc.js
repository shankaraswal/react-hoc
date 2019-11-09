import React, { Component } from 'react';
import  Family  from '../HocComponent'

const  mydetail={
        type:'infant',
        myage:'2months',
        rashi:'vrishik'
    }
class KukuHoc extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const xx ={...this.props.mydetail}
        return (<div>
                <h2>my name is Kuku and my age is {this.props.age}  </h2>
                <button 
                    onClick={this.props.double}>
                    Fire Kuku: {this.props.age}
                </button>
                    <p>{xx.type}</p>
                    <p>{xx.myage}</p>
                    <p>{xx.rashi}</p>
                </div>);
    }
}

export default Family(KukuHoc, mydetail)
import React, { Component } from 'react';
import  Family  from '../HocComponent'

const  mydetail={
    type:'kid',
    myage:'6years',
    rashi:'mashe'
}

class NikkuHoc extends Component {
   
    render() {
        const xx ={...this.props.mydetail}
        return (
            <div>
                <h2>my name is Nikku and my age is {this.props.age}  </h2>
                <button 
                    onClick={this.props.double}>
                    Fire Nikku: {this.props.age}
                </button>
                    <p>{xx.type}</p>
                    <p>{xx.myage}</p>
                    <p>{xx.rashi}</p>
            </div>
        );
    }
}

export default Family(NikkuHoc, mydetail)
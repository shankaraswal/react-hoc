import React, { Component } from 'react';
import  Family  from '../HocComponent'

const mydetail={
    type:'adult',
    myage:'38years',
    rashi:'kumbh'
} 
class ShankarHoc extends Component {
    render() {
        const xx ={...this.props.mydetail}
        return (<div>
            <h2>my name is Shankar and my age is {this.props.age}  </h2>
                <button 
                    onClick={this.props.double}>
                    Fire Shankar: {this.props.age}
                </button>
                    <p>{xx.type}</p>
                    <p>{xx.myage}</p>
                    <p>{xx.rashi}</p>
        </div>);
    }
}

export default Family(ShankarHoc, mydetail)
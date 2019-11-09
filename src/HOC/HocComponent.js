import React, { Component } from 'react';

const Family =(Member, obj)=>{
   
    class NewMember extends Component{
        constructor(props){
            super(props);
        
            this.state={
                age:0
            }
        }

        double=()=>{
            this.setState({
                age:this.state.age+1,
                mydetail:obj
            })
        }

        render(){
            return (
            <div className="container" >
                <h1>HOC example</h1>
                <hr/>
                <Member mydetail={this.state.mydetail} gender="Male" double={this.double}  age={this.state.age} />
            </div>
            )    
        }
    }
    
    return NewMember;
}

export default Family;

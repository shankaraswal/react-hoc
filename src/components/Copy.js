import React, { Component } from 'react'

class Copy extends Component {
    constructor(props){
        super(props);
        this.state={
            total:[]
        }
    }

    createArray=()=>{
        const total=[];
        let start=100, end=200, inc=5;
        for(var i=start;i<end;i+=inc){
            total.push(i)
        }
       this.setState({
           total
       })
    }
    componentDidMount(){
        this.createArray();
    }
    render() {
        console.log(this.state.total)
        return (
            <div>
               
                
            </div>
        )
    }
}

export default Copy;

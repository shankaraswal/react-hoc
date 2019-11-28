import React, { Component } from 'react';
import Modal from './../Modal/Modal'
const Family =(Member, obj)=>{
   
    class NewMember extends Component{
        constructor(props){
            super(props);
        
            this.state={
                age:0,
                isShowing: false

            }
        }

        double=()=>{
            this.setState({
                age:this.state.age+1,
                mydetail:obj
            })
        }

        openModalHandler = () => {
            this.setState({
              isShowing: true
            });
          }
         
          closeModalHandler = () => {
            this.setState({
              isShowing: false
            });
          }


        render(){
            return (
            <>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-shed"></div> : null }
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler} 
                    mydetail={this.state.mydetail} 
                    gender="Male" double={this.double}  age={this.state.age}
                    />
                    <div className="copyArea">
                        <h1>HOC example asdfas</h1>
                        <hr/>
                        <Member 
                            mydetail={this.state.mydetail} 
                            gender="Male" 
                            double={this.double}  
                            age={this.state.age} 
                            modalbtn={this.openModalHandler}
                            />
                        <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                    </div>
               
                            
            </>
            )    
        }
    }
    
    return NewMember;
}

export default Family;

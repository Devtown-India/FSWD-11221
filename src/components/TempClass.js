import React from 'react';
class TempClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
           
        }
    }

    handleInc = ()=>{
        this.setState(prev=>{
            return {
                count: prev.count + 1,
            }
        })
    }


    componentDidMount(){
        console.log("Component mounted")
        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>{
            this.setState({todos:data})
        })
    }

    componentDidUpdate(){
        console.log("Component rendered")
    }

    componentWillUnmount(){
        console.log("I'm unmounting")
    }

    

    render(){
        return(
            <div>
               <ol>
                  {
                      this.state.todos.map(todo=>{
                          return <li style={{margin:"50px"}} >{todo.title}</li>
                      })
                  }
               </ol>
                
            </div>
        )
    }
}

export default TempClass
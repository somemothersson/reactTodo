import React, { Component } from 'react';
import Header from './components/Layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css';



class App extends Component {
  state = {
    todos: [
      {
      id:1,
      title: "Wakeup",
      completed: false
    },
    {
      id:2,
      title: "Dinner",
      completed: false
    },
    {
      id:3,
      title: "Sleep",
      completed: false
    },
  ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
}

//Delete Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]})
}
  render() { 
    // console.log(this.state.todos)
    return (
        <div className="App">
          <Header />
          <AddTodo />
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
        </div>
      );

  }

}
export default App;
// function App(props) {
  
//   console.log(state.todos)
//   return (
//     <div className="App">
//       <Todos todos={this.state.todos}/>
//     </div>
//   );
// }
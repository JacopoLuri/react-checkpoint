import {React, Component} from 'react';
import './App.css';

let toDoList = [];

class App extends Component {

state = {
    show: false,
    toggle: 0,
    list: '',
    category: 'other'
}

handleChange = event => (
  this.setState({list: event.target.value})
)

handleSubmit = event => {
  event.preventDefault()
  toDoList.push(this.state);
  this.setState({
    show: true,
    list: '',
    category: 'other'
  })
}

deleteItem = (array, num) => {
 array.splice(num, 1)
 this.setState({toggle: this.state.toggle + 1})
}

selectChange = (event) => (
  this.setState({category: event.target.value})
) 

render() {
  
  let item = [];
  this.state.show 
    ? item = toDoList.map((toDoItem, index) => 
      <p key={index}>
        {toDoItem.list}   ||   {toDoItem.category}
        <button onClick={() => this.deleteItem(toDoList, index)}>Done!</button>
      </p>)
    : item = <p>Nothing to do yet!</p>

  return (
    <>
      <h1>What you need to do today???</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Type here......" value={this.state.list} onChange={this.handleChange} />
        <select value={this.state.category} onChange={this.selectChange}>
          <option value="other">Other</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="workout">Workout</option>
          <option value="gaming">Gaming</option>
        </select>
        <input type="submit" />
      </form>
      {item}
      <h2>Filter</h2>
      <button>All</button>
      <button onClick={this.codingCat}>Coding</button>
      <button>Cooking</button>
      <button>Workout</button>
      <button>Gaming</button>
      <button>Other</button>
    </>
  );
}

}

export default App;

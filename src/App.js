import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    person: [
      { id:'asdf',name: 'Vimukthi', age: 25 },
      { id:'sdfdfdas',name: 'Sithu', age: 24 },
      { id:'asF',name: 'Sana', age: 6 },
      { id:'dsfdf',name: 'Sss', age: 7 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  deletePersonHandler =(personIndex)=>{
    // const person = this.state.person.slice;
    const person = [...this.state.person];
    person.splice(personIndex,1);
    this.setState({person:person});
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let person = null;

    if (this.state.showPerson === true) {
      person = (
        <div>
          {this.state.person.map((onePerson,index) =>{
            return <Person 
            click ={()=>this.deletePersonHandler(index)}
            name={onePerson.name}
            age = {onePerson.age}
            key = {onePerson.id}/>
          })}
          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi,I'm React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;

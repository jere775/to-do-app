import './App.css';
import React from 'react';
import List from './components/List';

class App extends React.Component {
  //tracking user input: using a form or input field.
  //onChange function is probably needed
  //OnSubmit is definitely needed!
  //Probably need  a precentDefault
  //Need state to keep info the same and only change when I need it to

  constructor(props){
    super(props)

    this.state = {
      noteText:'',
      notes: []
    }
  }

  onChange = (event) => {
    this.setState({
      noteText:event.target.value
    })
  }

  onSubmit = (event) => {
    //prevent dataloss refreshing the page
    event.preventDefault()
    this.setState({
      noteText: '',
      notes:[...this.state.notes,this.state.noteText]
    })
    console.log(this.state.notes)
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className ="wrapper">
            <img src = "/img/r2h-icon.png" alt="R2H icon"/>
            <p className="title">Road To Hire</p>
          </div>
        </div>
        <div className="app">
          <div className="app-wrapper">
            <p className="app-title">To-Do List</p>
            <form className ="App" onSubmit = {this.onSubmit}>
              <input value = {this.state.noteText} onChange = {this.onChange} placeholder="Type here to add a task" type="text" id="box" />
              <br />
            </form>
            <br />
            <List notes = {this.state.notes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

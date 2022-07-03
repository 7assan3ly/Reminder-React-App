import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRemnider, removeRemnider, clearRemnider } from './actions';
import moment from 'moment';
import './App.css';

class App extends Component {

  state = {
    text: '',
    date: new Date()
  }

  renderReminders = () => {
    const { reminder } = this.props;
    return (
      <ul className='list-group'>
        {
          reminder.map(remindersRes => {
            return (
              <li className='list-group-item' key={remindersRes.id}>
                <p>{remindersRes.text}</p>
                <p>{moment(remindersRes.date).fromNow()}</p>
                <p className='btn btn-danger btn-delete' onClick={() => this.props.removeRemnider(remindersRes.id)}>x</p>
              </li>
            )
          })
        }
      </ul>
    )

  }

  render() {
    return (
      <div className="App">
        <div className='container' id="container">
          <div className='reminderSection'>
            <img className='logo' src="logo.png" />

            <h3 className='text-center'> Add Ur Reminders </h3>

            <input className='form-control' type="text" placeholder="Add Ur Reminder" value={this.state.text}
              onChange={
                (e) => this.setState({
                  text: e.target.value
                })
              } />

            <input className='form-control' type="datetime-local" value={this.state.date}
              onChange={
                (e) => this.setState({
                  date: e.target.value
                })
              } />

            <button className='btn btn-primary blockBtn'
              onClick={() => {this.props.addRemnider(this.state.text, this.state.date)
              this.setState({text:'', date:''})
              }}> Add Reminder </button>

            {this.renderReminders()}

            <button className='btn btn-danger blockBtn'
             onClick={() => this.props.clearRemnider()} > Clear Reminders </button>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps (state) {
//   return {
//     reminder: state
//   }
// }
// function mapDispatchToProps (dispatch) {
//   return {
//     addRemnider : () => dispatch(addRemnider())
//   }
// }
export default connect(state => { return { reminder: state } }, { addRemnider, removeRemnider, clearRemnider })(App);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadIssues, clearIssues} from '../actions/loadIssues';
import {increaseCounter, decreaseCounter, resetCounter} from '../actions/counterActions';

class App extends React.Component {
  handleIncreaseClick() {
    this.props.increaseCounter();
  }

  handleDecreaseClick() {
    this.props.decreaseCounter();
  }

  handleResetClick() {
    this.props.resetCounter();
  }

  handleLoadIssuesClick() {
    this.props.loadIssues();
  }

  handleClearIssuesClick() {
    this.props.clearIssues();
  }

  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <h2>Welcome!</h2>
        <div>
          <ul>
            <li><a href="http://brunch.io/">Brunch</a></li>
            <li><a href="https://facebook.github.io/react/">React</a></li>
            <li><a href="http://redux.js.org">Redux</a></li>
          </ul>
        </div>
        <h3>Counter = {this.props.counter}</h3>
        <div>
          <button onClick={::this.handleDecreaseClick}>-</button>
          <button onClick={::this.handleResetClick}>Reset</button>
          <button onClick={::this.handleIncreaseClick}>+</button>
        </div>
        <h3>Async loading of issues</h3>
        <div>
          <button onClick={::this.handleLoadIssuesClick}>Load issues</button>
          <button onClick={::this.handleClearIssuesClick}>Clear issues</button>
          <ul>
            {this.props.issues.map((issue, key) => (<li key={key}>{issue.title}</li>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({...state}),
  (dispatch) => bindActionCreators({
    loadIssues, clearIssues,
    increaseCounter, decreaseCounter, resetCounter
  }, dispatch)
)(App);
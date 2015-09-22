import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


// React component
export default class TodoApp extends React.Component {
  render(){
    const { value, onIncreaseClick ,ondiscreaseClick,haha} = this.props;
    this.props.value = 8
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={ondiscreaseClick}>Increase</button>
      </div>
    );
  }
}

import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Counter from './app/components/TodoApp.react.js';



//  Action:
const increaseAction = {type: 'increase'};
const discreaseAction = {type: 'discrease'}
// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    case 'discrease':
      return {count: count-1}
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state)  {

}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {

}

// Connected Component:
let App = connect(
  (state)=>{
    return {
      value: state.count,
      haha:"123",
      ggg:"777"
      };}
  ,(dispatch)=>{

  return {
    onIncreaseClick: () => dispatch(increaseAction),
    ondiscreaseClick: ()=> dispatch(discreaseAction)
    };
  }
)(Counter);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);

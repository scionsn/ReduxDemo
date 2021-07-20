import MyReducer from '../reducers/MyReducer';
import {createStore,combineReducers}from 'redux';
import  newaction from '../actions/MyAction';
// const rootreducer=combineReducers({
//     first:MyReducer,
//     second:MySecondReducer
// })
const MyStore=createStore(MyReducer)
export default MyStore;
// console.log("initial state",MyStore.getState())
// MyStore.subscribe(()=>console.log("updated state",MyStore.getState()))
//  MyStore.dispatch(newaction())
//  MyStore.dispatch(secondaction());
//  here the output will be first the initial state will be showed and then the dispatch method make changes
//  to the state and thus the subscribe method  will be called which will display the changes , we can call dispatch
//  method any number of times.
// the combinereducer takes the reducers as input and the dispatch method then makes  the changes in the state
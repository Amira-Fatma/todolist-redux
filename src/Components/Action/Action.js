
import {INCREMENT,DECREMENT}from './Actiontype';

export function increment() {
    return {
     type: INCREMENT
    }
  }

 export function decrement() {
    return {
     type: DECREMENT
    }
  }
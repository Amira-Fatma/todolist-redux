import React from 'react'
import { increment,decrement } from './Action/Action'
import {connect} from 'react-redux'

function Counter({Count,increment,decrement}) {
    return (
        <div className="wrap">
              <h1>Counter</h1>  
              <div>       
         <button onClick={decrement}>◄</button>   
         <span>{Count} </span>
         <button onClick={increment}>►</button>   
        </div>
        </div> 
    )
}
    const mapStateToProps = (state)=>{ return{ Count:state.count}}
    const mapDispatchToProps = dispatch => {
        return {
        increment: () => dispatch(increment()),
          decrement: () => dispatch(decrement())
        };
      };
       
        


        export default connect(
            mapStateToProps,
            mapDispatchToProps
          )(Counter)
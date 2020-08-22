import { INCREMENT, DECREMENT } from "../Action/Actiontype";

const initialState = {
  count: 0
};
function Counterreducer(state = initialState, action) {
     
        switch (action.type) {
            case INCREMENT:
              return {  count: state.count + 1 };
        
            case DECREMENT:
               {  if(state.count >0)
             return    { 
                     count: state.count-1
                     }
                 else{
                 state.count =0
            }
};
        
            default:
              return state;
          }
    
}

export default Counterreducer

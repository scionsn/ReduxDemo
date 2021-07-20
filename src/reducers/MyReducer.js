import {newaction} from "../actiontypes/Actiontype";

const initialstate={
    numofactions:10
}
const MyReducer =(state=initialstate,action)=>{
if(action.type==newaction){
return{
    ...state,
    numofactions:state.numofactions-1
}
}
return state;
}
export default MyReducer;
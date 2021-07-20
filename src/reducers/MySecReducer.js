const initialstate={
    numofsecaction:20
}
const MySecondReducer=(state=initialstate,action)=>{
if(action.type=="secondaction"){
var newstate={...initialstate}
newstate.numofsecaction-2;
return newstate
}
return state
}
export default MySecondReducer
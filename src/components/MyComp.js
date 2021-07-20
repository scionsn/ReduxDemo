import React from 'react'
import newactions from "../actions/MyAction";
import {connect} from "react-redux"
function MyComp(props) {
    return (
        <div>
            <h2>myreduxdemo</h2>
    <h2>no of actions-{props.noofactions}</h2>
    <button onClick={props.newactions}>take actions</button>
        </div>
    )
}
const mapstatetoprops=state=>{
    return {
        noofactions:state.noofactions
    }
}
const mapdispatchtoprops=dispatch=>{
    return{
newactions:()=>{dispatch(newactions())}
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(MyComp);

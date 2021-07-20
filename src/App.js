import React from 'react';
import MyComp from "./components/MyComp";
// import A from './components/A';
import {Provider} from "react-redux";
import MyStore from "./store/MyStore"
function App() {
  return (
    <Provider store={MyStore}>
      <h1>Redux Example</h1>
      {/* <A/> */}
      <MyComp/>
      </Provider>
  );
}

export default App;

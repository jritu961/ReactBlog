
import React, { createContext, useMemo, useReducer, useState } from 'react';
import RouteComponent from "./routes/index"
import { IToggle } from './interfaces/toggle';
import { initialState,Reducer } from './Reducer/useReducer';


export const MyContext = React.createContext<any>(null)


function App() {

   
  const [state,dispatch]=useReducer(Reducer,initialState)
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setdisLikeCount] = useState(0);
  const [user,setUser]=useState(null)
  const providerMemo=useMemo(()=>({user,setUser}),[user,setUser])
  return (
   
    
    <div className="App">
       
      <MyContext.Provider value={{state,dispatch,likeCount, setLikeCount, dislikeCount, setdisLikeCount,providerMemo}}>
        <RouteComponent/>
      </MyContext.Provider>
    
    </div>
  );
}

export default App;

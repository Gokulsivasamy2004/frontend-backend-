import React, { useEffect } from 'react'
import { createContext,useContext,useReducer } from "react";
import {reducer} from '../reducer/reducer'
import { json } from 'react-router-dom';

const GlobalContext =createContext();
export const useGlobalContext = ()=>useContext(GlobalContext);

const initialState ={
    basket:[],
    id:"",
    name:"",

}

const initialStateGet=localStorage.getItem('detail')? JSON.parse(localStorage.getItem('detail')) : initialState

function Context({children}) {
  
  const [state,dispatch] =useReducer(reducer,initialStateGet)
  
  useEffect(()=>{
    
    localStorage.setItem("detail",JSON.stringify(state))


},[state])


    
  return (
    <GlobalContext.Provider value={{...state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default Context
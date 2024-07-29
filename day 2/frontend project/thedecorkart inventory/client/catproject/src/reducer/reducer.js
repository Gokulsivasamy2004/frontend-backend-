import {ADD_TO_Basket,Add_User_Detail,Remove_TO_Basket} from './Action'

export const reducer = (state,action)=>{
    if(action.type=== ADD_TO_Basket){
        return{...state,  basket: [...state.basket, action.item],}
    }
    if(action.type=== Remove_TO_Basket){
        return{...state, basket:action.data}
    }
    if(action.type === Add_User_Detail){
        console.log(state)
        console.log(action.loginUserDetail)
        return{...state,...action.loginUserDetail}
    }

    if(action.type === "LOGOUT"){
        const initialState ={
            basket:[],
            id:"",
            name:"",
        }
            return({...state ,...initialState})
    }
    if(action.type === "BUY"){
            return {...state,basket:[]}
    }
}
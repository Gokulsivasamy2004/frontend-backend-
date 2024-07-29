import React, { useState } from 'react'

import {TfiUser} from 'react-icons/tfi'
import {AiOutlineLock} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../../context/Context';
import {Add_User_Detail} from '../../reducer/Action'
function Login() {

const [inputStyle,setInputStyle] = useState({name:true,password:true})
const [login,setLogin] =useState({name:'',password:''})
const [pageVariation,setPageVariation] = useState('Admin')
const navigate = useNavigate()

const {dispatch} = useGlobalContext()

const handleStyle = (inputName)=>{
  if(inputName === 'name'){
    setInputStyle((prev)=>{
      return{...prev,name:false,password:true}
    })
  }
  if(inputName === 'password'){
    setInputStyle((prev)=>{
      return{...prev,name:true,password:false}
    })
  }
}

const handleChange = (e)=>{
 const name = e.target.name;
  const value = e.target.value;
  setLogin((prev)=>{
    return{...prev,[name]:value}
  })
}

const handleSubmit = (e)=>{
  e.preventDefault()


if(login.name.trim() && login.password.trim()){

   

      
          dispatch({type:Add_User_Detail,login})
          navigate('/')
          
          
          
          
          
          


}else{
    if (!login.name.trim() && !login.password.trim()){
        console.log('')
        toast.success('😏 Name and password field empty', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }else if(! login.name.trim()){
        
        toast.success('😏 Name field is Empty', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }else if (! login.password.trim()){
   
        toast.success('😏 Password field is Empty', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }
}





  



}









  return (
    <div className='admin__container'>
    <div className='admin__container-form'>
        <div className='admin__container-form__img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSW0UFKRFKcN7BTh9K3XKuKA_D-TufSweFGy0y8rPSkI9ZvUsHdYjb20Djh121eC2Ulx4&usqp=CAU' alt="church" />
        </div>
        <div className='admin__container-form__content'>
            <div>
                <div className='admin__container-page'> 
                    <h3>  Log in.</h3>
                    
                </div>
              <p>Login with your <span style={{textTransform:'lowercase'}}></span> credentials</p>
            </div>
            <form className='admin__container-form__content-flied '>
                <div className={inputStyle.name?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('name')}>
                    <TfiUser className='admin__container-form__content-input__icon' />
                    <input type='text' name='name' placeholder='Name' value={login.name} onChange={handleChange}  />
                  
                </div>
                <div className={inputStyle.password?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('password')}>
                    <AiOutlineLock className='admin__container-form__content-input__icon'/>
                    <input type='password' name='password' placeholder='Password' value={login.password} onChange={handleChange}/>
                </div>
                <div className='admin__container-button'>
                    <button type='submit' className='login-button' onClick={handleSubmit}>Log In</button>
                    <Link className='admin__container-link' to='/register'>Not register?.Create account</Link>
                </div>
            </form>
        </div>
    </div>  
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  </div>
  )
}

export default Login
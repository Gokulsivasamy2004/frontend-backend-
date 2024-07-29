
import React, { useState } from 'react'
import {TfiUser} from 'react-icons/tfi'
import {AiOutlineLock} from 'react-icons/ai'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registration.css'
import {MdPassword} from 'react-icons/md'
import validation from './validation.js'
import {useNavigate} from 'react-router-dom'
function Registration() {


  const [inputStyle,setInputStyle] = useState({admin:true,password:true,confirmPassword:'true'})
  const [login,setLogin] =useState({name:'',password:'' ,confirmPassword:''})

  const navigation = useNavigate()
  
  const handleStyle = (inputName)=>{
    if(inputName === 'admin'){
      setInputStyle((prev)=>{
        return{...prev,admin:false,password:true,confirmPassword:true}
      })
    }
    if(inputName === 'password'){
      setInputStyle((prev)=>{
        return{...prev,admin:true,password:false,confirmPassword:true}
      })
    }
    if(inputName === 'confirmPassword'){
      setInputStyle((prev)=>{
        return{...prev,admin:true,password:true,confirmPassword:false}
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
    validation(login,setLogin,navigation)
  
  }
  
  




  return (
    <div className='admin__container'>
    <div className='admin__container-form'>
        <div className='admin__container-form__img-register'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaQH1TOY3UPXsYr3hZb_B495Z-RbzpWwwPw&usqp=CAU' alt="church" />
        </div>
        <div className='admin__container-form__content'>
            <div>
                <div className='admin__container-page'> 
                    <h3> Registration.</h3>
                    
                </div>
             
            </div>
            <form className='admin__container-form__content-flied '>
                <div className={inputStyle.admin?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('admin')}>
                    <TfiUser className='admin__container-form__content-input__icon' />
                    <input type='text' name='name' placeholder='Name' value={login.name} onChange={handleChange}  />
                  
                </div>
                <div className={inputStyle.password?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('password')}>
                    <AiOutlineLock className='admin__container-form__content-input__icon'/>
                    <input type='text' name='password' placeholder='Password' value={login.password} onChange={handleChange}/>
                </div>     
                <div className={inputStyle.confirmPassword?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('confirmPassword')}>
                    <MdPassword className='admin__container-form__content-input__icon'/>
                    <input type='text' name='confirmPassword' placeholder='Confirm Password' value={login.confirmPassword} onChange={handleChange}/>
                </div>      
                    <button type='submit' className='login-button' onClick={handleSubmit}>Submit</button>
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

export default Registration
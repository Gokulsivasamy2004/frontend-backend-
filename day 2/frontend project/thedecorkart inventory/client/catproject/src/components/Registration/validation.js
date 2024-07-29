import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './registration.css'
import {  toast } from 'react-toastify';

const validation = (login,setLogin,navigation)=>{

        console.log(login)
    if(login.name.trim()  && login.password.trim() && login.confirmPassword.trim() && login.password === login.confirmPassword){

            setLogin({name:'',password:'' ,confirmPassword:''})
                      navigation('/login')
          
 
            
        
  
  
    }else{

        if(!login.name.trim()  && !login.password.trim() && !login.confirmPassword.trim()){
            toast.error('😏 Three fields are empty!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if (!login.name.trim() && !login.password.trim()){
             
              toast.error('😏 Name and password field empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if (!login.name.trim() && !login.confirmPassword.trim() ){
              console.log('')
              toast.error('😏 Name and confirm password field empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if (!login.password.trim() && !login.confirmPassword.trim()){
             
              toast.error('😏 Password and confirm password  field empty', {
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
              toast.error('😏 Name field is empty', {
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
            toast.error('😏 Password field is empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if (! login.confirmPassword.trim()){
             
              toast.error('😏 ConfirmPassword field is empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if (login.password !== login.confirmPassword){
           
            toast.error('😏 Confirm password and password is not same', {
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

export default validation
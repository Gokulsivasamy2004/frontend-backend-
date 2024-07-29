import React from 'react'
import './navbar.css'
import { TbDiscount2 } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { useGlobalContext } from '../../context/Context';

function Navbar() {
  const {dispatch} =useGlobalContext()
  const {basket,name} = useGlobalContext()
  const user=localStorage.getItem('detail')? JSON.parse(localStorage.getItem('detail')) : null
  console.log(user)
  const logoutUser =()=>{
    localStorage.removeItem('detail')
    dispatch({type:"LOGOUT"})
  }



  return (
    <div className='nav__container'>
            <Link style={{textDecoration:'none',color:'white'}} to='/'>
                <h3>thedecorkart</h3>
            </Link>
            <div className='nav__links'>
                <div>
                    <a href='#newArrival' >New Arrivals</a>
                </div>
                <div>
                  <a href='#lighting'> Lighting</a>
                </div>
                  <div>
                     <a href='#wallDecor'>Wall Decor</a>
                  </div>
                    <div>
                      <a href='#bathDecor' >Bath Decor</a>
                    </div>
                    <div>
                      <a href='#furniture' >Furniture</a>
                    </div>
                      <div>
                         <a href='#photoFrame'>PhotoFrame</a>
                      </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                        <TbDiscount2  className='discount'/>
                        <a href='#discount'>  Hello, Discounts!</a>
                        </div>
            </div>
            <div className='nav__icons'>
                <Link to='/search' >  <FaSearch className='cursor' color='white'/></Link>
                {name? <CiLogout className='cursor'   onClick={logoutUser}/>
              : <Link style={{textDecoration:'none',color:'white'}} to='/login'>
              <FiUser  />
          </Link>  
              }
               <Link to='/checkout'  className='cursor bag'>
               <BsBagHeartFill color='white' />
                <p>{basket.length}</p>
               </Link>
            </div>
    </div>
  )
}

export default Navbar
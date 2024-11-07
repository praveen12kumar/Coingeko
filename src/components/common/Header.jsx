import React from 'react';
import { navigationLinks } from "../../constants";
import { Link } from 'react-router-dom';
import Button from "../common/Button";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
function Header (){
    
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/dashboard');
    }


  return (
    <div className='mx-auto  h-[10vh] shadow-md bg-white flex items-center justify-between px-4 md:px-8 lg:px-10 sticky top-0 z-50'>
        <div className="flex items-center justify-center cursor-pointer" onClick={()=> navigate("/")}>
          <img src={logo} alt="" className='w-32 md:w-40 lg:w-52' />
        </div>
        <div className="flex items-center gap-4 md:gap-7 lg:gap-10">
        <ul className="flex items-center gap-10">
        {
            navigationLinks?.map((nav)=>{
                return(
                    <Link className={`text-sm md:text-md font-poppins font-semibold text-slate-600 transition-colors duration-300 ease-in`} to={nav.path} key={nav.name}>{nav?.name}</Link>
                )
            })
        }
        </ul>
        <Button onClickHandler={onClickHandler} text={"Dashboard"} styles={"text-slate-100 bg-[#3A80E9] hover:shadow-xl "}/>
        </div>
    </div>
  )
}

export default Header
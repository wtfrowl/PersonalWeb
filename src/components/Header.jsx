import wtfrowl from '../assets/wtfrowl.png';
import { BiSolidMusic } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
const Header = ()=>{
    return(
    <div className='sticky top-0 z-50 '>

       <header className="flex bg-green-800/60 h-20 justify-between md:justify-evenly items-center ">
      <div className="ml-5 md:m-0"><NavLink className={({isActive})=> `${isActive?" mx-5 bg-red-800":"m-5"}`}
    to="/"><img src={wtfrowl} /></NavLink></div>
      <div className="mr-5 md:m-0">
        <NavLink className={({isActive})=> `${isActive?"text-green-900":""}`}
    to="chill"><BiSolidMusic className='curoser-pointer w-[45px] h-[45px]'/></NavLink></div>

       </header>
        
       </div>
        )
}

export default Header;

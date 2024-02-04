import {BiHomeAlt, BiUser} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { LiaMailBulkSolid, LiaLaptopCodeSolid } from "react-icons/lia";

const Nav = () => {

return(

<nav className='fixed bottom-4 md:bottom-16 w-full overflow-hidden z-20'>
<div className="container mx-auto flex justify-center">
    <div className="w-full bg-green-600/60 border h-[90px] backdrop-blur-md rounded-full max-w-[400px] flex justify-evenly items-center mx-4 lg:mx-0">
        <NavLink to="">
        <BiHomeAlt className='curoser-pointer w-[45px] h-[45px] p-1' />
        </NavLink>
        <NavLink  to="work">
        <LiaLaptopCodeSolid className='curoser-pointer w-[45px] h-[45px] p-1'/>
        </NavLink>
        <NavLink  to="skills" > 
        <BiUser className='curoser-pointer w-[45px] h-[45px] p-1'/>
        </NavLink>
        <NavLink  to="contact" >
        <LiaMailBulkSolid className='curoser-pointer w-[45px] h-[45px] p-1'/>
        </NavLink>
      
       
  
    </div>

</div>


</nav>


)

}

export default Nav
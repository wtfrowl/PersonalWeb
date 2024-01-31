import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsAndroid, BsClipboardData} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Nav = () => {

return(

<nav className='fixed bottom-4 md:bottom-20 w-full overflow-hidden'>
<div className="container mx-auto flex justify-center">
    <div className="w-full bg-yellow-800/60 border h-[90px] backdrop-blur-3xl rounded-full max-w-[400px] flex justify-evenly items-center mx-5 lg:mx-0">
        <NavLink to="">
        <BiHomeAlt className='curoser-pointer w-[45px] h-[45px] p-1' />
        </NavLink>
        <NavLink  to="about" > 
        <BiUser className='curoser-pointer w-[45px] h-[45px] p-1'/>
        </NavLink>
        <NavLink  to="contact" >
        <BsClipboardData className='curoser-pointer w-[45px] h-[45px] p-1'/>
        </NavLink>
        <NavLink  to="work">
        <BsAndroid className='curoser-pointer w-[45px] h-[45px] p-1'/>
        </NavLink>
  
    </div>

</div>


</nav>


)

}

export default Nav
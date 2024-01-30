import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsAndroid, BsClipboardData} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Nav = () => {

return(



<nav className='fixed bottom-4 md:bottom-20 w-full overflow-hidden'>
<div className="container mx-auto flex justify-center">
    <div className="w-full bg-yellow-200/70 md:bg-purple-100/70 border h-[90px] backdrop-blur-2xl rounded-full max-w-[400px] flex justify-evenly text-yellow-900 md:text-purple-900 items-center mx-5 lg:mx-0">
        <Link activeClass="bg-white rounded-xl p-2" smooth={true} spy={true} to="home">
        <BiHomeAlt className='curoser-pointer w-[45px] h-[45px]' />
        </Link>
        <Link activeClass="bg-white rounded-xl p-2" to="about" smooth={true} spy={true}> 
        <BiUser className='curoser-pointer w-[45px] h-[45px]'/>
        </Link>
        <Link activeClass="bg-white rounded-xl p-2" to="contact" smooth={true} spy={true}>
        <BsClipboardData className='curoser-pointer w-[45px] h-[45px]'/>
        </Link>
        <Link activeClass="bg-white rounded-xl p-2" to="work" smooth={true} spy={true}>
        <BsAndroid className='curoser-pointer w-[45px] h-[45px]'/>
        </Link>
    </div>
</div>


</nav>


)

}

export default Nav
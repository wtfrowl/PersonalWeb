import wtfrowl from '../assets/wtfrowl.png';
import { LiaHelicopterSolid } from "react-icons/lia";

const Header = ()=>{
    return(
    <div className='sticky top-0'>

       <header className="flex bg-white/20 h-20 justify-between md:justify-evenly items-center">
      <div className="mx-5"><img src={wtfrowl} /></div>
      <div className="mx-5"><LiaHelicopterSolid  className='curoser-pointer w-[45px] h-[45px]'/></div>

       </header>
        
       </div>
        )
}

export default Header;

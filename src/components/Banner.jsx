import { TypeAnimation } from "react-type-animation"
import banner_img from '../assets/banner.png'
const Banner = ()=>{
    return(
        <div id="home" className="h-screen lg:py-24 flex justify-center ">
<div className="text-[100px]">
           <TypeAnimation sequence={[
            ' Coming Soon',
               2000,
            ' At',
              2000,
            'Your',
            2000,
           'Finger Tips....',
            2000,
        ]}
        speed={50}
        wrapper="span"
        repeat={Infinity}
        
        />
        </div>
    {/* <img src={banner_img}  className="rounded-full h-[200px]" alt="banner"/> */}
    </div>
           
     
        
        
        )
        }


export default Banner
import {TypeAnimation} from "react-type-animation";
const Banner = ()=>{
    return(
        <>
        <div className="h-10" id="home"></div>

        <div  className="min-h-[85vh] lg:min-h-[78vh] mt-10 lg:py-24 flex justify-center z-0 ">
           
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
        </div>
 
        </>   
     
        
        
        )
        }


export default Banner;

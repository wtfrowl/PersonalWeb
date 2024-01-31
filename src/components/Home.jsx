import {TypeAnimation} from "react-type-animation";
const Home = ()=>{
    return(
        <>
     <div  className="py-8 lg:py-24 lg:h-screen flex text-4xl min-h-[100vh] ">
           
<div className="text-[60px]">
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


export default Home;

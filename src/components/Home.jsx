import { useEffect, useState } from 'react';
import profile from '../../public/profile.jpg'


const Home = ()=>{

      const [currentText, setCurrentText] = useState("");
      const texts = ["BackEnd", "FrontEnd","CI/CD","CLOUD"];
      let currentIndex = 0;
    
      useEffect(() => {
            
                  const intervalId = setInterval(() => {
                        currentIndex = (currentIndex + 1) % texts.length;
                        setCurrentText(texts[currentIndex]);
                      }, 2000);
                  
                      // Clean up the interval on component unmount
                      return () => clearInterval(intervalId);
           

       
      }, []);
        

    return(
        <>
     <div  className="mx-10 py-2 lg:py-10 h-[1000px] md:h-screen">
     <div className="grid justify-center lg:text-center">
    
           <h1 className=" mb-4 text-center font-poor text-green-900 text-6xl md:text-8xl font-semibold mt-2">Hi !
            <p className=' typewriter'>I&#39;m Rahul </p></h1>

            <span  className='text-center text-4xl font-poor text-green-800 animate-bounce'>{currentText}</span>
            <span  className='text-center text-4xl font-poor text-green-800 animate-bounce'>{currentText}</span>


   {/* <div className="items-center flex justify-center mt-2"> */}
           {/* <img className="rounded-full h-[200px] w-[200px] border-green-700 border-2 shadow object-cover" src={profile} alt="pic"/></div> */}
 
     {/* <span className="md:w-[700px] text-slate-800 text-2xl text-left font-semibold font-rbt mt-2  text-wrap">
      <p>Aspiring MERN developer with over 3 years under my belt, eager to translate knowledge into impactful applications.</p>
<p className="mt-4 ">Adept in MongoDB, Express, React, and Node.js, actively seeking growth and opportunities to contribute to innovative projects.</p>
<p className="mt-4 ">   Let&#39;s build something remarkable together! 
</p>

</span>  */}




</div>










        </div>
 
        </>   
     
        
        
        )
        }


export default Home;

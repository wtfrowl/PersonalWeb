
 import profile from '../../public/profile.jpg'
import { TypeAnimation } from 'react-type-animation';


const Home = ()=>{

        

    return(
        <>
     <div  className="mx-10 py-2 lg:py-10 h-[1000px] md:h-screen">
     <div className="grid justify-center lg:text-center">
    
           <h1 className="mb-4 text-center font-poor text-green-900 text-6xl md:text-8xl font-semibold mt-2">Hi !
          I&#39;m Rahul </h1>

          <div className="items-center flex justify-center mb-2"> 
         <img className="rounded-full h-[200px] w-[200px] border-[#3b703c] border-2 shadow object-cover" src={profile} alt="pic"/></div>

            <span  className='text-center text-4xl font-poor text-green-800 font-bold m-4'>

            <TypeAnimation
  sequence={['FullStack', 500, 'BackEnd', 500, 'FrontEnd', 500,'Cloud', 500]}
  
  repeat={Infinity}
/></span>


<TypeAnimation
className="md:w-[700px] text-slate-800 text-2xl  font-semibold font-rbt mt-2 gap-2 text-wrap text-middle md:text-left"
      
        sequence={[
          'MERN Stack Developer with 3 years under my belt, eager to translate knowledge into impactful applications.\n As a Full Stack Developer, I specialize in React, Node.js, Express, MongoDB and Tailwind CSS.\n  Currently deepening my understanding of relational databases.\n If you are looking for a FullStack Developer, you are at the right place. ',
          3000,
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
        omitDeletionAnimation={true}
        style={{  whiteSpace: 'pre-line' }}
        repeat={0}
      />






 
     {/* <span >
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

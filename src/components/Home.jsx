import profile from '../../public/profile.jpg'
const Home = ()=>{
    return(
        <>
     <div  className="mx-10 py-2 lg:py-10 h-[1000px] md:h-screen">
     <div className="grid justify-center lg:text-center">
           <h1 className="mb-4 text-center font-poor text-green-900 text-6xl font-semibold mt-2">Hi ! I&#39;m Rahul</h1>

 
     <span className="md:w-[700px] text-slate-800 text-2xl text-left font-semibold font-rbt mt-2  text-wrap">
      <p>Aspiring MERN developer with 2 years under my belt, eager to translate knowledge into impactful applications.</p>
<p className="mt-4 ">Adept in MongoDB, Express, React, and Node.js, actively seeking growth and opportunities to contribute to innovative projects.  Let&#39;s build something remarkable together! 
</p>
<div className="items-center flex justify-center mt-4 md:mt-8">
<img className="rounded-full h-[200px] w-[200px] border-green-700 border-2 shadow object-cover" src={profile} alt="pic"/></div>


</span> 




</div>










        </div>
 
        </>   
     
        
        
        )
        }


export default Home;

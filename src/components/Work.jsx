import loadingimg from '../assets/loading.gif'
import {useEffect, useState } from "react";
const Work = ()=>{
 
    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/data_projects.json');
          const data = await response.json();
          setJsonData(data);
       
          setTimeout(() => {
            setLoading(false); // Hide loading indicator after 2 seconds
          }, 1000);
       
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
  
      fetchData();
    }, []);
        return(
            <div  className="py-2 lg:py-10 h-auto min-h-screen">
                <div className=" flex justify-center">
                 
                    <h1 className="p-4 md:p-0 font-poor text-green-900 text-8xl md:text-9xl font-semibold">WORK</h1>
                </div>
                <div className="flex items-center flex-col gap-4  mx-auto">
           <p className="text-black font-poor text-3xl font-bold  rounded-xl"> Work is Proof </p></div>
    
           {loading ? ( // Display loading Spinner
        <div className="flex items-center justify-center">
          <p className="mt-20 md:mt-[140px]"> <img className="h-10 md:h-[110px] " src={loadingimg} alt="loading" /></p>
        </div>
      ) ://displaying content
       (

      <div className="mt-5 flex items-center justify-center md:mx-[200px] mb-[200px]"> 
                  <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-10 ">
          {jsonData &&
            jsonData.map((item, index) => (
              <>
<div key={index} className="w-[220px] rounded-xl shadow  mb-6 overflow-hidden">
                    <img className="object-cover md:h-[160px]" src={item.image} alt="project1" />
                    <span className="bg-white/80 block text-center text-black font-mono font-bold">{item.name}</span>
                       <a href={item.link} className=" mb-0 block font-bold text-center bg-green-800/80 p-2 text-white ">View</a>
                  </div>
                  
</>
            ))}
        </div>
      </div>)}
    </div>
  );
};

export default Work;
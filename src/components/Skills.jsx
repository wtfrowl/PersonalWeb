import {useEffect, useState } from "react";
import loadingimg from '../assets/loading.gif'
const Skills = ()=>{
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data_skills.json');
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
  return (
    <div className="py-2 lg:py-10 h-auto min-h-screen">
      <div className="flex justify-center">
        <h1 className="p-4 md:p-0 font-poor text-green-900 text-8xl md:text-9xl font-semibold">Skills</h1>
      </div>
      <div className="flex items-center flex-col gap-4 mx-auto md:mt-2">
        <p className="text-black font-poor text-2xl md:text-5xl  font-bold rounded-xl"> Skills are Earned </p>
      </div>


      {loading ? ( // Display loading Spinner
        <div className="flex items-center justify-center">
          <p className="mt-20 md:mt-[140px]"> <img className="h-10 md:h-[110px] " src={loadingimg} alt="loading" /></p>
        </div>
      ) ://displaying content
       (

      <div className="mt-4 md:mt-6 flex items-center justify-center md:mx-[200px] mb-[200px]"> 
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-10 ">
          {jsonData &&
            jsonData.map((item, index) => (
              <>
<div key={index} className="text-xl m-1">      
                    <span className="shadow-inner shadow-[#000000]  rounded-lg p-2  w-full block text-center font-mono font-bold  transition-transform hover:tilt bg-[#3b703c] ">{item.name}</span>
                  </div>
                  
</>
            ))}
        </div>
      </div>)}
    </div>
  );
};

export default Skills;
import { BiSolidCalendarAlt } from "react-icons/bi";

const Experience = ()=>{


    return(
        <div  className="mx-10 py-2 lg:py-10 h-auto min-h-screen">
        <div className=" flex justify-center">
        <h1 className="p-4 md:p-0 font-poor text-green-900 text-8xl md:text-9xl font-semibold">Experience</h1>
        </div>

        <div className="flex items-center flex-col gap-4 mx-auto md:mt-2">
        <p className="text-black font-poor text-2xl  md:text-5xl  font-bold rounded-xl"> Time Teaches You </p>
      </div>
  
<div className="flex justify-center mt-5 md:mt-10 mb-40">
  <div className="space-y-6 border-l-2 border-[#3b703c] border-dashed">

    <div className="relative w-full">
    <BiSolidCalendarAlt className="absolute -top-0.4 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#3b703c]"/>
      <div className="ml-6">
      <div className="md:flex md:justify-between"> <h3 className="font-bold text-[#3b703c] text-xl">Developer</h3>
      <span className="mt-1 block text-sm font-semibold text-[#3b703c]">Tata Consultancy Services · Full-time</span>
       </div> 
       <span className="mt-1 block text-sm font-semibold text-[#3e6b3f]">Jul 2021 - <b>Present</b> · 3 yrs 2 mos</span>
        <p className="mt-2 max-w-screen-sm text-sm text-black font-mono">Leveraged the MERN stack (MongoDB, Express, React, Node.js) to manage and display sales data for over 10+ different products. Designed and implemented a dynamic dashboard using React, enabling management to easily view, filter, and analyze data in real-time. Developed RESTful API endpoints using Node.js and Express to handle CRUD operations for sales data, ensuring seamless data integration and updates.
       <br/> Additionally, created role-based access control (RBAC) middleware to secure the application, ensuring that only authorized users could access specific functionalities and data.
<br/>Working on a project involving schema validation middleware for a wide range of products. Developed a robust schema validation solution to ensure data integrity and consistency across multiple product types. This middleware was designed to validate incoming data against predefined schemas, handling complex validation rules and error reporting.
        </p>
   
      </div>
    </div>
    <div className="relative w-full">
    <BiSolidCalendarAlt className="absolute -top-0.4 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#3b703c]"/>
      <div className="ml-6">
      <div className="md:flex md:justify-between"> <h3 className="font-bold text-[#3b703c] text-xl">Intern</h3>
      <span className="mt-1 block text-sm font-semibold text-[#3e6b3f]">Slick Wallet</span>
       </div> 
       <span className="mt-1 block text-sm font-semibold text-[#3b703c]">Mar 2020 - Feb 2021 · 1 yr</span>
        <p className="mt-2 max-w-screen-sm text-sm text-black font-mono">
        • Utilized React and Tailwind CSS to design and develop a variety of UI components, significantly enhancing the overall user experience.<br/> • Led collaborative efforts with UI/UX designers to build accessible and aesthetically pleasing interfaces.<br/>• Collaborated with DeFi Protocols to integrate third-party APIs and services, significantly enhancing application functionality and elevating the user experience for web3 users

        </p>
   
      </div>
    </div>


    </div>
  </div>




</div>


     
        
        
        )
}

export default Experience;

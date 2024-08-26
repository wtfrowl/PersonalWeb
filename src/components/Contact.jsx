import { BiCurrentLocation, BiLogoLinkedin, BiLogoTwitter, BiMailSend } from "react-icons/bi";

const Contact = ()=>{
    return(
        <div  className="mx-10 py-2 lg:py-10 h-auto min-h-screen">
        <div className=" flex justify-center">
        <h1 className="p-4 md:p-0 font-poor text-green-900 text-8xl md:text-9xl font-semibold">Contact</h1>
        </div>

<div className="flex items-center flex-col gap-4 md:mt-6  mx-auto">
   <p className="text-black font-poor text-4xl md:text-5xl font-bold rounded-xl"> Get in touch with Me</p>
          
<div className="md:mt-5 bg-green-100 p-4 border-2 md:text-3xl text-green-800 h-full break-word">
<p className="flex items-center gap-2"><BiMailSend  className='curoser-pointer w-[45px] h-[45px] p-1'/> <b>Email:</b> rahulbaloda0725@gmail.com</p>
<p className="flex items-center gap-2"><BiLogoTwitter className='curoser-pointer w-[45px] h-[45px] p-1'/> <b>Twitter:</b> x.com/@wtfrowl</p>
<p className="flex items-center gap-2"><BiLogoLinkedin  className='curoser-pointer w-[45px] h-[45px] p-1'/> <b>LinkedIn:</b> linkedin.com/in/rahulbaloda</p>
<p className="flex items-center gap-2"><BiCurrentLocation  className='curoser-pointer w-[45px] h-[45px] p-1'/> <b>Address:</b> Bengaluru, Karnataka, India</p>
</div>
            </div>

        </div>
        
        // <button className="h-md bg-green-900/80 px-8 py-2  rounded-lg backdrop-blur-10 text-2xl font-poor">Submit</button>
        )
}

export default Contact;

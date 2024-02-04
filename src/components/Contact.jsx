const Contact = ()=>{
    return(
        <div  className="mx-10 py-2 lg:py-10 h-auto min-h-screen">
        <div className=" flex justify-center">
        <h1 className="p-4 md:p-0 font-poor text-green-900 text-8xl md:text-9xl font-semibold">Contact</h1>
        </div>

<div className="flex items-center flex-col gap-4 mt-6 mx-auto">
   <p className="text-black font-poor text-2xl font-bold  rounded-xl"> Fill up the form Below to Contact </p>
           <input type="email" className="h-10 w-[300px] bg-white/70 px-4 py-6 rounded-lg backdrop-blur-10 text-2xl text-black" placeholder="E-mail"></input>
           <input type="text" className="h-[100px] text-center w-[300px] bg-white/70 px-4 py-6 rounded-lg backdrop-blur-10 text-xl text-black" placeholder="Subject"></input>
            <button className="h-md bg-green-900/80 px-8 py-2  rounded-lg backdrop-blur-10 text-2xl font-poor">Submit</button>

            </div>

        </div>
        
        
        )
}

export default Contact;

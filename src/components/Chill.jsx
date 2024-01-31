const Chill = ()=>{


    return(
        <div  className="py-2 lg:py-10 h-[1000px] md:h-screen">
        <div className=" flex justify-center">
        <h1 className="p-4 md:p-0 font-poor text-green-900 text-6xl font-semibold"> Music </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 mt-10 p-0 mx-10 lg:mx-0">
        <iframe  className="m-0 h-[100px]" src="https://open.spotify.com/embed/playlist/0ge8gNISSJC59PaW1LL3Bo?utm_source=generator"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
        <iframe className="m-0 h-[100px] " src="https://open.spotify.com/embed/playlist/3ggsXYWiAZ1laxA4USqhaQ?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  
        </div> </div>
        
        
        )
}

export default Chill

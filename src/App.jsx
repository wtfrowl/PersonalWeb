import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Work from "./components/Work"
import Banner from "./components/Banner"
import Header from "./components/Header"

function App() {

  return (
    <div className="bg-gradient-to-b from-yellow-500 to-green-500 md:from-purple-500 md:to-yellow-300 bg-no-repeat bg-cover-overflow-hidden text-white ">
     <Nav/>
     <Header/>
     <Banner/>
     <About/>
     <Contact/>
     <Work/>
    <div className="h-[4000px] sm:h-0"></div>
    </div>
  )
}

export default App

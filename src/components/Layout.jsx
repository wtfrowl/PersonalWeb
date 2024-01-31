import { Outlet } from "react-router-dom"
import Header from "./Header"
import Nav from "./Nav"

function Layout() {
    return (
      <><div className="bg-gradient-to-b  from-yellow-500 to-pink-400  bg-no-repeat bg-cover-overflow-hidden text-white ">
      <Header/>
      <Nav/>
      <Outlet/>
      </div>
      </>
    )
  }
  
  export default Layout;
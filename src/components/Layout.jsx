import { Outlet } from "react-router-dom"
import Header from "./Header"
import Nav from "./Nav"

function Layout() {
    return (
      <><div className="bg-gradient-to-b  from-yellow-400 to-green-200  bg-no-repeat bg-cover-overflow-hidden text-white ">
      <Header/>
      <Outlet/>
      <Nav/>
      </div>
      </>
    )
  }
  
  export default Layout;
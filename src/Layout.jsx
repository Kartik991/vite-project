import { Outlet } from "react-router"
import {Header,Footer} from "./components/index"

function Layout(){
    return  (
        <>
        <Header/>
        <Outlet className=""/>
        <Footer/>
        </>


    )
}

export default Layout
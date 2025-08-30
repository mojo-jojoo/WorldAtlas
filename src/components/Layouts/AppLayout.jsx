import { Outlet } from "react-router-dom"
import { Footer } from "../Ui/Footer"
import { Header } from "../Ui/Header"
import { HeroSection } from "../Ui/HeroSection"

export const AppLayout =()=>{
    return(
        <>
        <Header/>
        
        <Outlet/>
        <Footer/>
        </>
    )                    
}                                                
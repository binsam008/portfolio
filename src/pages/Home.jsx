import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { StarBackground } from "@/components/StarBackground"
import { AboutMe } from "../components/AboutMe"
import { Project } from "../components/Project"
import Skills from "../components/Skills"
import  ContactSection  from "../components/ContactSection"
import CustomCursor from "../components/CustomCursor"
import Footer from "../components/Footer"

export const Home =()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/*Theme toggle*/}
        {/* <ThemeToggle/> */}
        
        {/* BackgroundEffect */}
        <StarBackground/>


        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}
        <main>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <Project/>
            
            <ContactSection/>
            <Footer/>
        </main>


        {/* Footer */}

    </div>
}
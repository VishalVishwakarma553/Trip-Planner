import { useState } from "react"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"

const HomePage = () => {
    const [scroll, setScroll] = useState(false)
    return (
        <>
        <Navbar setScroll= {setScroll}></Navbar>
        <HeroSection scroll={scroll} ></HeroSection>
        </>
    )
}

export default HomePage

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/Sections/HeroSection'
import Info from '../components/Sections/Info'
import { homeObjOne } from '../components/Sections/Info/Data'
import Footer from '../components/Footer/index'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Info {...homeObjOne} />
            <Footer />
        </div>
    )
}

export default Home

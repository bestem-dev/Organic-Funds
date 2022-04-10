import React, {useState} from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {

    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {

        SetIsOpen(!isOpen)
    }

    return(
        <>
        <Navbar toggle={toggle} />
        <HeroSection />
        </>
    );
};

export default Home
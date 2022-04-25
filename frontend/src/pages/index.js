import React, {useState} from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Cards from '../components/Cards/Cards';

const Home = () => {

    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {

        SetIsOpen(!isOpen)
    }

    return(
        <>
        <Navbar toggle={toggle} />
        <HeroSection />
        <Cards />
        </>
    );
};

export default Home
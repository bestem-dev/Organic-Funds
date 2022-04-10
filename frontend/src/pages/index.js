import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const Home = () => {

    const[isOpen, SetIsOpen] = useState(false)

    const toggle = () => {

        SetIsOpen(!isOpen)
    }

    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <pSection />
        </>
    );
};

export default Home
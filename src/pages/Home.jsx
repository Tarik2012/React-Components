import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Greeting from "../components/PropTypes";


const Home = () => {
    return (
        <>
            <Header />
            <Greeting name='tarik' age={37} isStudent />
            <Footer />
        </>
    );
}

export default Home;
import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"
import { RingLoader } from 'react-spinners';


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <>
        <div className='spining'><RingLoader color="#00e5fe" /> </div>
             
            <RouterScrollTop />
                
            {
                loading ?

                    <div className='loading-pag'>
                        <div className="loader">
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    :

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/service" element={<Services />}></Route>
                        <Route exact path="/project" element={<Project />}></Route>
                        <Route exact path="/project/app" element={<ProjectApp />} />
                    </Routes>

            }
           

        </>
    )
}

export default App

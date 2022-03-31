import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbarhide from './components/NavbarHide/Navbarhide'
import Banner from './components/Banner/Banner'
import Cards from './components/BannerCards/Cards'
import FeatureCourses from './components/Features/FeatureCourses'
import Events from './components/UpcomingEvents/Events'
import Students from './components/StudentsCarousel/Students'
import Submenu from './components/BottomMenu/Submenu'
import Scroll from './components/BackToTop/Scroll'

// import Navbar from './components/Navbar/Navbar'
// import Demos from './components/Demos/Demos'
// import Video from './components/Video/Video'
// import Instructor from './components/InstructorCarousel/Instructor'

function App() {
    return (
        <>
            <Router>
                {/* Jitali */}
                <Navbarhide />
                <Banner />
                <Cards />
                <FeatureCourses />
                <Events />
                <Students />
                <Submenu />
                <Scroll showBelow={250} />

                {/* Shevya */}
                {/* <Video /> */}
                {/* <Navbar /> */}
                {/* <Demos /> */}
                {/* <Instructor /> */}
                {/* <Footer /> */}

                <Routes>
                    <Route path='/' exact />
                </Routes>
            </Router>
        </>
    )
}

export default App

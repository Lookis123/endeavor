import React from 'react'
import useSticky from './hooks/StickyNav.js'
import Welcome from './components/Header/Welcome'
import Navbar from './components/Header/Navbar'
import Navbar1 from './components/Header/Navbar1'
function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar1 />
            <Navbar sticky={isSticky} />
            <Welcome element={element} />       
            
        </>
    )
}

export default App

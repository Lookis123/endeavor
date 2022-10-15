import React from 'react'

import './Welcome.css'
import Logo from '../../assets/images/endeavor.jpg'
import About from './About'

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Example for sticky navbar for endeavor</p>
                        
                    </div>
                </section>
                <About />
                <About />
                <About />
            </main>
    )
}

export default Welcome

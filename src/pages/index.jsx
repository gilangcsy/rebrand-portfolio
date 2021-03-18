import React, { useState } from 'react'

import Hero from '../component/Hero';
import Navbar from '../component/Navbar';

const Main = () => {

    const [
        isDark,
        setIsDark
    ] = useState(true)

    const theme = () => {
        setIsDark(!isDark)
    }
    return (
        <>
            <Navbar
                isDark={isDark} theme={theme}
            />
            <Hero isDark={isDark} theme={theme} />
        </>
    )
}

export default Main
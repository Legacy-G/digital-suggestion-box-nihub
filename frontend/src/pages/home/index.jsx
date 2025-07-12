import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from "../../hooks/useMediaQuery"
import SuggestionBox from '../../components/SuggestionBox'

const Home = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
        <motion.div id="home"  
            // onViewportEnter={() => setSelectedPage("home")}                                
            className="sm:h-full w-full sm:mt-[4.5rem] mt-[4.5rem]
                        border border-red-500//
             
            flex flex-col justify-center items-center    " 
        >
            <SuggestionBox />
        </motion.div>
    </section>
  )
}

export default Home
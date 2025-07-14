import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from "../shared/Logo"
import { Link } from 'react-router-dom';

// import Menu from '../shared/Menu'
// import PrimaryBtn from '../shared/PrimaryBtn'
// import useMediaQuery from '../hooks/useMediaQuery';
// import HamburgerMenu from '../shared/HamburgerMenu';


const Navbar = ({ isTopOfPage }) => {

    const btnStyles =  ` w-[10rem] border border-slate-300 rounded-md p-3 
                        font-[600] transition-all
                        hover:cursor-pointer hover:text-slate-100
                        hover:bg-gradient-to-br from-slate-500 to-slate-800
                        `
    
    const topShadowStyles =  isTopOfPage ? ` bg-slate-50  ` : `shadow-lg bg-white `;
    // const navBgStyles = isTopOfPage ? ` bg-gray-20 text-black` : ` bg-lightblue-250 drop-shadow  `
    return (
        <nav className={` fixed top-0 left-0 z-10 w-full transition-all 
                            sm:px-11 px-3 py-3 flex flex-row justify-between
                            gap-6 
                            border// border-black
                            ${topShadowStyles}

          `}>
            <div className=' w-fit border// border-black 
                            flex justify-center items-center
            '>
                <Logo />
            </div>
            <Link to="/register" className="inline-flex items-center gap-1 text-sm hover:underline">
                   <div className=' w-fit border// border-black
                            flex justify-between items-center sm:gap-6 gap-3
            '>
                <input type='submit' className={btnStyles}
                        // onClick={handleSubmit} 
                        value='Admin Dashboard'
                />
            </div>
                    </Link>
           

        </nav>

    )
}


// const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage, menuItems, isSignedIn, user, setUser }) => {

//     const [isMenuToggled, setIsMenuToggled] = useState(false);
//     const isAboveMediumScreens = useMediaQuery("(min-width: 960px)");
//     const mobileMenuBgStyles = isTopOfPage ? `bg-gray-20 ` : `bg-lightblue-250 `
//     const nav = document.querySelector("#nav-bar")
//     const topShadowStyles =  isTopOfPage ? `  ` : `shadow-xl `;
//     const textGradientMain = `bg-gradient-to-b from-pink-500 to-yellow-300 
//                                 text-transparent bg-clip-text font-bold`
//     const handleToggleMenu = () => {
//         isMenuToggled === false ? setIsMenuToggled(true) : setIsMenuToggled(false);
//     }

//     return (
//         <nav className={` fixed top-0 left-0 z-10 w-full   ${navBgStyles} 
//                                 transition-all   `}>
//             <section id="nav-bar"
//                     className={` ${topShadowStyles} py-1
//                                 px-[2rem] md:px-[7rem] mx-auto
//                                 relative
//                                 w-full  min-h-[90px]
//                                 flex justify-between items-center
//                                 transition-all
//             `}>
//                 <Logo isTopOfPage={isTopOfPage} />
//                 <div className=' relative h-full' >
//                     { isAboveMediumScreens ? (
//                         <Menu menuItems={menuItems} classFn={"flex gap-x-6  "} 
//                             isTopOfPage={isTopOfPage}
//                             selectedPage={selectedPage} setSelectedPage={setSelectedPage} 
//                         />
//                     ) : (
//                         <HamburgerMenu classFn={`z-[50] ${ isTopOfPage ? `bg-gray-500` : `bg-slate-50` } `} 
//                                         onClickFn={handleToggleMenu} 
//                                        isMenuToggled={isMenuToggled} isTopOfPage={isTopOfPage}
//                         />
//                     ) }
                    
//                     {/* { isSignedIn === false ? (
//                         <a  href="/profile"
//                             className="text-white opacity-80 hover:opacity-100 capitalize text-[18px]
//                                         cursor-pointer 
//                         " >
//                             {user.email}                    
//                         </a>
//                     ) : (
//                         <a  href="/signin"
//                             className="text-white opacity-80 hover:opacity-100 capitalize text-[18px]
//                                         cursor-pointer 
//                         " >
//                             sign In
//                         </a>
//                     ) } */}


                    
                    

//                 </div>

//                 { isMenuToggled && (
//                     // MOBILE MENU
//                     // <motion.div
//                     //         initial="hidden"
//                     //         whileInView="visible"
//                     //         viewport={{ once: true, amount: 0.5 }}
//                     //         transition={{ duration: 0.4, delay: 0.4 }}
//                     //         variants={{                                
//                     //             hidden: { opacity: 0,  x: 200 },
//                     //             visible: { opacity: 1,  x: 0 },
//                     //         }}
//                     //         className={`flex flex-col justify-center items-center  
//                     //                     ${mobileMenuBgStyles} 
//                     //                     shadow-2xl h-[100vh] px-[9rem] 
//                     //                     w-[70%]// w-full// border 
//                     //                     pt-[9rem] rounded-lg
//                     //                     absolute top-0 right-0
//                     //         `}
//                     // >
                        
//                     //     <Menu menuItems={menuItems} isTopOfPage={isTopOfPage}
//                     //         classFn={"flex flex-col gap-y-7 justify-start items-center w-full    h-full "}
//                     //         selectedPage={selectedPage} setSelectedPage={setSelectedPage} 
//                     //     />

//                     //     {/* <Menu menuItems={menuItems} 
//                     //         classFn={"border border-red-500 flex flex-col gap-y-7  h-full  "} 
//                     //         isTopOfPage={isTopOfPage}
//                     //         selectedPage={selectedPage} setSelectedPage={setSelectedPage}
//                     //     /> */}
//                     // </motion.div>



//                     <div    
//                         className={`flex flex-col justify-center items-center  
//                                     ${mobileMenuBgStyles} 
//                                     shadow-2xl h-[100vh] px-[2rem] w-[60%]
//                                     pt-[9rem] rounded-lg
//                                     transition-all duration-700
//                                     absolute top-0 right-0

//                         `}
//                     >
//                         <Menu menuItems={menuItems} 
//                             classFn={" flex flex-col gap-y-7  h-full w-fit text-left  "} 
//                             isTopOfPage={isTopOfPage} 
//                             handleToggleMenu={handleToggleMenu}
//                             selectedPage={selectedPage} setSelectedPage={setSelectedPage}
//                         />
//                     </div>
//                 ) }
                
//                 { isAboveMediumScreens && (
//                     <PrimaryBtn value={"Enquire Now"} classFn={"rounded-lg "}
//                                 hrefFn={"#contact"}
//                     />
//                 )}

//             </section>
//         </nav>
//     )
// }


export default Navbar;
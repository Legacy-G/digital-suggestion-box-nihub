import React from 'react'



const PrimaryText = ({ children }) => {
  return (
    <h1 className=" font-montserrat md:text-md text-sm font-bold// font-[600]
                    text-center place-self-center 
                    text-slate-500
    ">
        {children}
    </h1>
  )
}

export default PrimaryText
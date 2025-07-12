import React from 'react'



const HText = ({ children  }) => {
  return (
    <h1 className=" font-montserrat md:text-4xl text-3xl font-[900] text-center place-self-center 
                    text-gray-800 w-full
    ">
        {children}
    </h1>
  )
}

export default HText
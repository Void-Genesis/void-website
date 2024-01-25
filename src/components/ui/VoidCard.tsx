'use client'

import React, { useState } from 'react';
export default function VoidCard() {

    const [isBlue, setIsBlue] = useState(false);

    const toggleImage = () => {
        setIsBlue(!isBlue);
    }

    return (

        <div className="relative z-0 p-20 lg:pl-16 lg:pr-24 lg:h-full lg:ml-20 border-[0.471px] rounded-[3.47px] border-void-grey-100 bg-gradient-to-br from-void-custom-dark-200 to-darkblue-200" onClick={toggleImage}>
            <div className="absolute -z-20 top-0 right-[8px] -left-2 bottom-0 p-20 border-[0.471px] border-void-grey-300 rounded-[3.47px] bg-gradient-to-br from-void-custom-dark-300 to-void-custom-dark-400" />
            <div className="absolute -z-10 top-0 right-[18px] -left-3 bottom-0 p-20 border-[0.471px] border-[#2E303B] rounded-[3.47px] bg-gradient-to-br from-void-custom-dark-100 to-void-custom-dark-200" />

            <img
                className={`lg:w-full lg:h-full transition-transform duration-500 ${isBlue ? 'rotate-180' : 'rotate-0'}`}
                src={isBlue ? "/logo-void-blue.svg" : "/logo-void-orange.svg"}
                alt="Void Genesis"
            />
        </div>

    )
}

{/* <div className="flex justify-center pt-16 lg:p-0 bg-yellow-500">

    
<div className="relative p-[42px] w-[241px] h-[241px] lg:h-full lg:w-full" onClick={toggleImage}>
    <div className="lg:h-full lg:w-full absolute top-0 right-[0px] left-0 bottom-0 z-30 flex justify-center items-center  border-[0.471px] border-[#2E303B] rounded-[3.47px] bg-gradient-to-br from-void-custom-dark-100 to-void-custom-dark-200">
        <img
            className={`lg:w-full lg:h-full transition-transform duration-500 w-[157px] h-[157px] lg:p-[60px]  ${isBlue ? 'rotate-180' : 'rotate-0'}`}
            src={isBlue ? "/logo-void-blue.svg" : "/logo-void-orange.svg"}
            alt="Void Genesis"
        />
    </div>
    

<div className="absolute top-0 left-[8px] z-20 w-[241px] h-[241px] border-[0.471px] border-void-grey-300 rounded-[3.47px] bg-gradient-to-br from-void-custom-dark-300 to-void-custom-dark-400" />

<div className="absolute top-0 left-[16px] w-[241px] h-[241px] border-[0.471px] border-void-grey-100 rounded-[3.47px] bg-gradient-to-br from-void-custom-dark-200 to-darkblue-200" /> 
</div>

</div> */}
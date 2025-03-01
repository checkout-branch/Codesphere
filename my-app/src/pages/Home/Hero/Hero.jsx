import React from 'react'

import Img from '../../../../public/main-top.png'
import { HeroParallax } from '../../../common/UI/hero-parallax'
import { ContainerScroll } from '../../../common/UI/3d-card'
import { CardHoverEffect } from '../Project/CardHoverEffect'
import { BentoGridDemo } from '../Project/GlowingEffec'

const Hero = () => {



    return (
        <div className=''>

<div className='bg-gradient-to-t from-[#363372] via-[#2d295c] via-[#1b1945] min-h-screen to-[#17153B]'>
<ContainerScroll 

        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  dark:text-white text-white">
            Hi, I'm Salman Faris k, <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              A Passionate Developer
              </span>
            </h1>
          </>
        }
      >
        {/* Use the standard img tag if you're not using Next.js */}
        <img  
       
          src={Img}
          alt="hero"
          height="720"
          width="1400"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable="false"
        />
      </ContainerScroll >
</div>

<div className='bg-gradient-to-t from-[#17153B] via-[#1b1945] via-[#2d295c] to-[#363372] min-h-screen'>
<HeroParallax /> 
</div>

<div className='bg-gradient-to-t from-[#010102] via-[#0c0b20] via-[#0f0e27] to-[#17153B]  min-h-screenflex justify-center items-center'>
<CardHoverEffect/>
    
</div>
<div className='bg-gradient-to-t from-[#17153B] via-[#0f0e27] via-[#0c0b20] to-[#010102]  min-h-screen flex justify-center items-center'>

    <BentoGridDemo/>
</div>
   
        </div>
    )
}

export default Hero

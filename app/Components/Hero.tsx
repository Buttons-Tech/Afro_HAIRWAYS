import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-screen pt-12 lg:text-center bg-gradient-to-b from-[#FFE1DE] via-[#FFFFFF] to-[#FFD6D2] text-center'>
      <h1 className='font-bold font-poppins text-[50px]'> Finally.</h1>
     <span><span className='font-bold text-[50px]'>Try on a </span><span className='text-[#969292] text-[50px] '>new</span> <span className='text-[#FF6F61] font-bold text-[50px]'>hairstyle</span><br /> <span className='font-bold text-[50px]'>with your phone.</span> </span> <br />
     <span className='lg:text-[30px] text-[25px]'>The new app that lets you virtually try on hairstyles, <br /> discover the best barbers and stylists in Lagos, and <br /> book appointments seamlessly.</span> 
     
     <div className='mt-4  mb-9'>
     <button className='text-[30px] text-white bg-[#FF6F61] lg:w-[823px] w-[532px] h-[89px] '> &#8226; Join the Waitlist</button>
     </div>
     <button className='text-[30px] lg:w-[823px] h-[89px] border-1 w-[532px] mb-4'>&#8226; Join the Waitlist</button>
     <hr className='w-screen border-3 border-[#E4E2E2] mt-30  mb-14' />
    </div>
    </>
  )
}

export default Hero
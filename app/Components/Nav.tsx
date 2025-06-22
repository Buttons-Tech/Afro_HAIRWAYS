import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo.png'
import hairways from '../../public/images/hairway.png'

const Nav = () => {
  return (
    <>
    <div className=' w-screen h-[150px] flex  md:gap-30 gap-19 bg-[#FFE1DE] border-b-2 justify-center items-center px-10 '>
        <Image src={logo} alt="" width={100} height={82} className='w-[100px] h-[82px]' />
        <Image src={hairways} alt="" width={432.44} height={82} className='lg:w-[432.44px] h-[94px] sm:w-[252px] ' />
       
        <button className='w-[100px] h-[52px] bg-[#FF6F61] rounded-tr-xl rounded-bl-xl font-extrabold text-[16px] text-center text-white'>
            &#8226; JOIN
        </button>
    </div>
    </>
  )
}

export default Nav
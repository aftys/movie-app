import React from "react"
import {RiNotification3Fill} from 'react-icons/ri'
import {IoIosGitNetwork} from 'react-icons/io'

const Navbar=()=>{
   return(
      <>
      <div className='bg-main-dark-bg w-full  z-30 h-[50px] flex justify-between'>
         <div className='w-1/4 px-2 pt-4 h-full flex justify-between text-gray-300'>
            <p>Movies</p>
            <p>Series</p>
            <p>TV Shows</p>
         </div>
         <div className='w-3/4 h-full flex justify-end items-center gap-5 px-5'>
            <RiNotification3Fill className="fill-gray-300 h-[25px] w-[25px]"/>
            <IoIosGitNetwork className="fill-gray-300 h-[25px] w-[25px]"/>
         </div>
      </div>
      <div className='bg-gradient-to-b from-[rgb(20,20,20)] to-transparent w-full   h-[10px] '/>
      </>
   )
}

export default Navbar;
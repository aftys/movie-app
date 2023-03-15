import React from 'react'
import { menuItems } from '../data';
import { AiFillHome } from 'react-icons/ai'



const LeftSidebar=()=>{
    const [activeLink, setActiveLink]=React.useState(1);
    return (
    <div className=" absolute w-full h-full py-[60px] text-gray-500 pl-5 justify-around gap-5 flex flex-col overflow-scroll">
        {menuItems.map((item)=>(
            <div className="w-full h-[30%] flex flex-col justify-start gap-4">
                <p className="text-sm">{item.category}</p>
                {item.categoryItems.map((link)=>(
                    <div 
                        onClick={()=>{setActiveLink(link.id)}}
                        className={`flex justify-start align-center items-center gap-7  cursor-pointer border-red-500 ${ link.id==activeLink ? ("border-r-[3px]") : ("")} border-red-500`}
                    >
                        <p className={` ${ link.id==activeLink ? ("text-red-500") : (" text-gray-300")}  h-[20px] flex flex-col w-[20px] items-center`}>{link.icon}</p>
                        <p className={`text-md ${ link.id==activeLink ? ("text-red-500") : (" text-gray-300")}`}>{link.name}</p>
                    </div>
                    
                ))}
                {/* <hr  className="mt-[10px] w-[90%]"/> */}
            </div>
            
        ))}
    </div>
    )
}

export default LeftSidebar;
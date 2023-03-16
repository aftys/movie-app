import React from 'react'
import { MdKeyboardArrowDown,MdSearch ,MdOutlineDone} from 'react-icons/md'
import { HiOutlinePlusSmall } from 'react-icons/hi2'

const categories=[
    {
        id:1,
        category:"Animation"
    },{
        id:2,
        category:"Action"
    },{
        id:3,
        category:"Adventure"
    },{
        id:4,
        category:"Comedy"
    },{
        id:5,
        category:"Family"
    },{
        id:6,
        category:"Science"
    },{
        id:7,
        category:"Horror"
    },{
        id:8,
        category:"Fantasy"
    },{
        id:9,
        category:"History"
    },{
        id:10,
        category:"Romance"
    },
]

const RightSidebar = () => {
    const [activeLink,setActiveLink]=React.useState([1]);
    function addCategory(id){
        let newArr=[...activeLink];
        if(newArr.includes(id)) newArr.splice(newArr.indexOf(id),1);
        else newArr.push(id);
        setActiveLink([...newArr])
    }
    return (
        <>
           
           <div className="fixed w-[280px] right-0 top-0 px-5 bg-main-dark-bg">
                 {/*profile*/}
                <div className=" h-15 flex items-center justify-around bg-black gap-4 cursor-pointer p-2 rounded-3xl">
                    <div className="rounded-full w-10 h-10 border-2 border-gray-400 overflow-hidden">
                        <img className="h-full" src={"avatar2.webp"} alt="user-profile" /> 
                    </div>            
                    <p>    
                        <span className="text-gray-400 text-14">Hi,{' '}</span>
                        <span className="text-gray-400 font-bold ml-1 text-xl">
                            Oussama
                        </span>
                    </p>
                    <MdKeyboardArrowDown className="text-gray-400 text-14" />
                </div>

                {/*Search*/}
                <div className="h-[40px] flex  flex-row items-center justify-start overflow-hidden bg-black gap-4 cursor-pointer p-1 rounded-3xl">
                    <p className="text-gray-400 text-3xl h-full w-[15%] flex justify-center"><MdSearch/></p>
                    <input className="bg-transparent text-center h-full  text-gray-400 w-[70%]" placeholder="Search a Movie" />
                </div>
                <div className='bg-main-dark-bg h-[20px] w-full'/>
            </div>
            {/*categories*/}
            <div className="w-[90%] px-2 mt-[120px]">
                <p className="text-gray-300 text-lg">Categories</p>
                <div className="grid grid-cols-2 gap-3 w-full mt-5">
                    {categories.map((item,idx)=>(
                        <div 
                            key={idx} className={` ${ activeLink.includes(idx)? ("bg-red-500") : (" bg-black")}  h-10 rounded-2xl flex items-center justify-around text-white cursor-pointer`}
                            onClick={()=>{addCategory(idx)}}
                        >
                            <p>{item.category}</p>
                            { activeLink.includes(idx) ? (<MdOutlineDone/>) : (<HiOutlinePlusSmall/>)} 
                        </div>
                    ))}
                </div>
            </div>            
            {/*Recent downolads*/}
            <div className="w-[90%] px-2 ">
                <p className="text-gray-300 text-lg">Recent downloads</p>
                <img src={"https://image.tmdb.org/t/p/w500/xBl5AGw7HXZcv1nNXPlzGgO4Cfo.jpg"} className="rounded-xl mt-5" alt="recent"/>
                <img src={"https://image.tmdb.org/t/p/w500/xBl5AGw7HXZcv1nNXPlzGgO4Cfo.jpg"} className="rounded-xl mt-5" alt="recent"/>
                <p className="text-gray-300 text-lg w-full flex justify-end">see all &gt;</p>
            </div>
            
        </>
    )
}

export default RightSidebar;
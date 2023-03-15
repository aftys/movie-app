import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im'
import { films } from '../data'
import {Slider} from '.'


// const style = {
//     temp1: "h-[270px]  rounded-xl overflow-hidden flex justify-center items-center   col-span-2 bg-ligray",
//     temp2: "h-[270px]  rounded-xl overflow-hidden flex justify-center items-center bg-ligray"
// }


// function isCol(id) {
//     if (id % 3 == 1) return style.temp1
//     return style.temp2
// }




function App() {
    const [select, setSelect] = useState(null)
    return (

        <>
            <div className="mt-[100px] w-full flex flex-col justify-center items-cente gap-3">
                <div className="flex justify-between w-full px-5 ">
                    <p className="text-white text-xl">Trending movies</p>
                    <p className="text-gray-400 cursor-pointer text-xl">See all &gt;</p>
                </div>
                <div className="h-[250px]   ml-[17px] flex flex-row overflow-scroll  gap-3  snap-x snap-mandatory">
                {/* {films.map(item => (<div key={item.id} layoutId={item.id}  className="h-full snap-start shrink-0 hover:border-2 border-red-500   lg:w-[49%] md:w-[100%] bg-black rounded-xl text-white  flex items-center justify-center bg-ligray overflow-hidden flex justify-center items-center" ><img src={item.poster} className="w-full hover:scale-110 ease-in-out duration-500 outline-none" /></div>))} */}
                {films.map(item => <Slider slides={item}/>)}
                </div>

            </div>
            <div className="mt-[20px] w-full flex flex-col justify-center items-cente ">
                <div className="flex justify-between w-full px-5 ">
                    <p className="text-white text-xl">Top Rated</p>
                    <p className="text-gray-400 cursor-pointer text-xl">See all &gt;</p>
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-flow-row-dense p-4 gap-5 w-full ">
                    {films.map(item => (
                            <motion.div key={item.id}
                                className="h-[270px]  rounded-xl overflow-hidden flex justify-center items-center bg-ligray hover:border-2 border-red-500" 
                                layoutId={item.id} 
                                onClick={() => { setSelect(item) }} 
                            >
                                <motion.img layoutId={`img-${item.id}`} src={item.poster} className="w-full hover:scale-110 ease-in-oiut duration-500 outline-none" />
                            </motion.div>
                    ))}

                </div>
            </div>
            <AnimatePresence>m star
                {select && (
                    <>
                        <motion.div
                            animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                            class="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm z-50">

                        </motion.div>
                        <motion.div
                            drag dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                            layoutId={select.id} className="fixed top-[20%] right-[20%] w-[60%] h-[60%] rounded-xl z-50 overflow-hidden  bg-ligray border-2 border-red-500 ">
                            <motion.button onClick={() => setSelect(null)} className="absolute top-2 right-2"><ImCancelCircle className='fill-white w-[20px] h-[20px]' />
                            </motion.button>
                            <motion.img 
                                src={select.poster} 
                                className="absolute left-0 items-center  flex justify-center w-1/2 z-60"
                                layoutId={`img-${select.id}`}
                            />
                        
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;

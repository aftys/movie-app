import { useState } from "react";
import {motion,AnimatePresence} from  'framer-motion';
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

const Slider = ({ slides ,id}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ?slides.backdrops.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.backdrops.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  return (
    <div div key={id} layoutId={id}  className="h-full relative  bg-cover bg-center snap-start shrink-0 hover:border-2 border-red-500   lg:w-[49%] md:w-[100%] bg-black rounded-xl text-white  flex items-center justify-center bg-ligray overflow-hidden flex justify-center items-center"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
    >
      <div >
        {isHovered &&(<div onClick={goToPrevious} className=" absolute top-1/2 transform -translate-y-1/2 left-10 text-red-500 text-4xl z-1 cursor-pointer">
          <IoIosArrowBack/>
        </div>)}
        {isHovered &&(<div onClick={goToNext} className="absolute top-1/2 transform -translate-y-1/2 right-10 text-red-500 text-4xl z-1 cursor-pointer">
          <IoIosArrowForward/>
        </div>)}
      </div>
      <AnimatePresence><motion.img 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="h-full w-full"
        src={slides.backdrops[currentIndex]}/></AnimatePresence>
      <div className="absolute bottom-0 w-full flex justify-center">
        {isHovered && slides.backdrops.map((slide, slideIndex) => (
          <div
            className="mx-2 cursor-pointer text-red-500 text-xl"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Slider;
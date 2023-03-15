import './App.css';
import { LeftSidebar,RightSidebar,Main,Navbar } from './components';


const style = {
    app:"bg-main-dark-bg min-h-screen min-w-screen flex  items-center justify-center content-center",
    rightSide:"fixed right-0 top-0  w-[17%] min-h-screen  bg-main-dark-bg flex flex-col items-center pt-5",
    leftSide:"fixed left-0 top-0 w-[17%] min-h-screen  bg-main-dark-bg",
    main:"relative  w-[66%] bg-black  h-full items-center   overflow-auto scrollbar-none z-40    "
}



function App() {
  return (
    <div className={style.app}>
      <div className=" fixed  top-0 left-[17%] right-[17%] z-50 flex flex-col ">
        
        {/* <Navbar/> */}
        <div className='bg-main-dark-bg w-full   h-[60px] '/>
        <div className='bg-gradient-to-b from-[rgb(20,20,20)] to-transparent w-full   h-[10px] '/>
      </div>
      <div className={style.leftSide} >
        <LeftSidebar/>
      </div>
      <div className={style.main}>
        <Main/>
      </div>
      <div className={style.rightSide}>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;

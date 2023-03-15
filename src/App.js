import './App.css';
import { LeftSidebar, RightSidebar, Main, Navbar,Logo } from './components';


const style = {
  app: "bg-main-dark-bg min-h-screen min-w-screen flex  items-center justify-center content-center",
  rightSide: "fixed right-0 top-0  w-[280px] h-screen overflow-y-auto bg-main-dark-bg flex flex-col items-center pt-5 ",
  leftSide: "fixed left-0 top-0 w-[280px] min-h-screen  bg-main-dark-bg",
  main: "fixed h-screen  overflow-scroll left-[280px] right-[280px] bg-black  h-full items-center  z-20    "
}



function App() {
  return (
    <div className={style.app}>
      <div className=" fixed  top-0 left-[280px] right-[280px] z-30 flex flex-col ">
        <Navbar />
      </div>
      <div className="fixed top-2 left-2 h-[30px] w-[60px] z-50">
        <Logo/>
      </div>
      <div className={style.leftSide} >
        <LeftSidebar />
      </div>
      <div className={style.main}>
        <Main />
      </div>
      <div className={style.rightSide}>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;

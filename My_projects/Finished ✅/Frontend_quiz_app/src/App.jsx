import { useContext } from "react"
import { ThemeContext } from "./context/ThemeProvider";
import { Link } from 'react-router'
import Switch from "./components/Switch";

function App() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <>
      <img src={`../src/assets/pattern-background-desktop-${theme === 'dark' ? 'dark' : 'light'}.svg`} className="w-full h-screen absolute pointer-events-none "/>
      <div className={`${theme === 'dark' ? 'bg-[#313e51]' : 'bg-[#F4F9F9]'} flex justify-center items-end flex-col h-screen transition duration-300`}>
        <div className="absolute top-[100px] right-[300px]"><Switch /></div>
        <div className="flex justify-between items-start w-full z-1 px-[300px]">
          <div className="flex justify-center items-start flex-col gap-[30px] w-[408px]">
            <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[60px] font-light`}>Welcome to the <b className="font-semibold">Frontend Quiz!</b></p>
            <i className={`${theme === 'dark' ? 'text-[#b4c0d4]' : 'text-[#878e99]'} text-[20px] font-light`}>Pick a subject to get started.</i>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Link to="/HTML" className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-5 py-[11px] pl-3 rounded-xl w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-2 bg-[#ffeee1] rounded-[10px]">
                <img src="../src/assets/icon-html.svg" className="pointer-events-none" />
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-medium`}>HTML</p>
            </Link>
            <Link to="/CSS" className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-5 py-[11px] pl-3 rounded-xl w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-2 bg-[#e1fdef] rounded-[10px]">
                <img src="../src/assets/icon-css.svg" className="pointer-events-none"/>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-medium`}>CSS</p>
            </Link>
            <Link to="/JavaScript" className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-5 py-[11px] pl-3 rounded-xl w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-2 bg-[#edeeff] rounded-[10px]">
                <img src="../src/assets/icon-js.svg" className="pointer-events-none"/>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-medium`}>JavaScript</p>
            </Link>
            <Link to="/Accessibility" className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-5 py-[11px] pl-3 rounded-xl w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-2 bg-[#f5e6ff] rounded-[10px]">
                <img src="../src/assets/icon-accessibility.svg" className="pointer-events-none"/>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-medium`}>Accessibility</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
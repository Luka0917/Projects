import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

export default function Switch(){
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className="flex justify-center items-center z-1 gap-[25px]">
            <button onClick={() => setTheme('light')} className={`${theme === 'light' && 'bg-[#3c4d67] hover:bg-[#3d5983]'} p-[7px] rounded-[50%] cursor-pointer transition duration-200`}>
                <img src='../src/assets/icon-sun-light.svg' className="pointer-events-none w-[30px] h-[30px]"/>
            </button>
            <button onClick={() => setTheme('dark')} className={`${theme === 'dark' && 'bg-[#3c4d67] hover:bg-[#3d5983]'} p-[7px] rounded-[50%] cursor-pointer transition duration-200`}>
                <img src={`../src/assets/icon-moon-${theme === 'dark' ? 'light' : 'dark'}.svg`} className="pointer-events-none w-[30px] h-[30px]"/>
            </button>
        </div>
    )
}
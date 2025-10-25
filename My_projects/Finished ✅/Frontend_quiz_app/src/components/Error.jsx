import { useContext } from "react"
import { ThemeContext } from '../context/ThemeProvider'
import { Link } from 'react-router'

export default function Error(){
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <div className={`${theme === 'dark' ? 'bg-[#313e51]' : 'bg-[#F4F9F9]'} transition duration-300 flex justify-center items-center flex-col h-screen`}>
                <img src={`../src/assets/pattern-background-desktop-${theme === 'dark' ? 'dark' : 'light'}.svg`} className="w-full h-screen absolute pointer-events-none "/>
                <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} z-1 text-[100px] font-medium`}><b>404</b> Page not Found!</p>
                <Link to="/" className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} font-medium mt-2.5 hover:underline cursor-pointer`}>Home Page</Link>
            </div>
        </>
    )
}
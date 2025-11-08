import { useLocation } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Switch from "./Switch";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router'

export default function Result(){
    const location = useLocation();
    const {score = 0, quiz = "Quiz"} = location.state || {};
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    let logoBg = '';

    if(quiz === 'HTML'){
        logoBg = 'bg-[#ffeee1]';
    }else if(quiz === 'CSS'){
        logoBg = 'bg-[#e1fdef]';
    }else if(quiz === 'js'){
        logoBg = 'bg-[#edeeff]';
    }else{
        logoBg = 'bg-[#f5e6ff]';
    }

    return (
        <>
            <img src={`../src/assets/pattern-background-desktop-${theme === 'dark' ? 'dark' : 'light'}.svg`} className="w-full h-screen absolute pointer-events-none "/>
            <div className={`${theme === 'dark' ? 'bg-[#313e51]' : 'bg-[#F4F9F9]'} transition duration-300 flex justify-center items-center flex-col h-screen`}>
                <div className="z-1 flex justify-between items-start w-full px-[300px] absolute top-[100px]">
                    <div className="flex justify-center items-center gap-5">
                        <div className={`${logoBg} flex justify-center items-center p-2 rounded-[10px]`}>
                            <img src={`../src/assets/icon-${quiz.toLowerCase()}.svg`} className="pointer-events-none" />
                        </div>
                        <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[25px] font-medium text-[#fffffd`}>{quiz === 'js' ? 'JavaScript' : quiz.charAt(0).toUpperCase() + quiz.slice(1)}</p>
                    </div>
                    <Switch />
                </div>
                <div className="z-1 flex justify-center items-center flex-col gap-5">
                    <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[40px] font-light`}>Quiz completed <b className="font-bold">You scored...</b></p>
                    <div className={`${theme === 'dark' ? 'bg-[#3c4c67]' : 'bg-[#B6BBC4]'} w-[500px] h-[400px] rounded-2xl flex justify-center items-center flex-col gap-[30px]`}>
                        <div className="flex justify-center items-center gap-5">
                            <div className={`${logoBg} flex justify-center items-center p-2 rounded-[10px]`}>
                                <img src={`../src/assets/icon-${quiz.toLowerCase()}.svg`} />
                            </div>
                            <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[25px] font-medium text-[#fffffd`}>{quiz === 'js' ? 'JavaScript' : quiz.charAt(0).toUpperCase() + quiz.slice(1)}</p>
                        </div>
                        <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[100px] font-bold`}>{score}</p>
                        <p className={`${theme === 'dark' ? 'text-[#b4c0d4]' : 'text-[#686e79]'} text-[25px] font-medium`}>out of 10</p>
                    </div>
                    <button 
                        onClick={() => navigate(`/${quiz === 'js' ? 'JavaScript' : quiz.charAt(0).toUpperCase() + quiz.slice(1)}`)}
                        className={`
                            ${theme === 'dark' ? 'bg-[#a828f6]' : 'bg-[#7f41c7]'}
                            w-[500px] bg-[#a828f6] rounded-2xl py-[15px] text-[18px] font-medium text-[#f5f6fb] cursor-pointer hover:bg-[#891ecc] transition-all duration-500
                        `}
                    >
                        Play Again
                    </button>
                </div>
                <Link
                    to="/"
                    className={`
                        ${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} 
                        font-medium mt-2.5 hover:underline cursor-pointer
                    `}
                >
                    Home Page
                </Link>
            </div>
        </>
    )
}
import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeProvider"
import Switch from "./Switch";
import { data } from '../data';
import { useNavigate } from "react-router-dom";

export default function Accessibility(){
    const {theme} = useContext(ThemeContext);
    const [questionID, setQuestionID] = useState(1);
    const [chosenAnswer, setChosenAnswer] = useState(null);
    const [answerStatus, setAnswerStatus] = useState(null); 
    const [points, setPoints] = useState(0);
    const navigate = useNavigate();

    const questions = data.quizzes[3].questions;

    function handleSubmit(){
        if(!chosenAnswer) return;
        const answer = questions[questionID - 1].answer;
        if(chosenAnswer === answer){
            setAnswerStatus('correct');
            setPoints(prev => prev + 1);
        }else{
            setAnswerStatus('wrong');
        }
        setTimeout(() => {
            if(questionID === 10){
                navigate("/Result", {state: {score: points, quiz: "accessibility"}});
            }else{
                setQuestionID(prev => prev + 1);
                setChosenAnswer(null);
                setAnswerStatus(null);
            }
        }, 1500);
    }

    return (
        <>
            <img src={`../src/assets/pattern-background-desktop-${theme === 'dark' ? 'dark' : 'light'}.svg`} className="w-full h-screen absolute pointer-events-none "/>
            <div className={`${theme === 'dark' ? 'bg-[#313e51]' : 'bg-[#F4F9F9]'} transition duration-300 flex justify-center items-center flex-col h-screen`}>
                <div className="z-1 flex justify-between items-start w-full px-[300px] absolute top-[100px]">
                    <div className="flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center p-2 bg-[#f5e6ff] rounded-[10px]">
                            <img src="../src/assets/icon-accessibility.svg" className="pointer-events-none" />
                        </div>
                        <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[25px] font-medium`}>Accessibility</p>
                    </div>
                    <Switch />
                </div>
                <div className="z-1 flex justify-between items-center w-full px-[300px]">
                    <div className="flex justify-start items-start flex-col h-[379px] gap-[210px]">
                        <div>
                            <i className={`${theme === 'dark' ? 'text-[#b4c0d4]' : 'text-[#878e99]'}`}>Question {questionID} of 10</i>
                            <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[30px] font-medium w-[500px] mt-5`}>{questions[questionID-1].question}</p>
                        </div>
                        <div className={`${theme === 'dark' ? 'bg-[#3c4d68]' : 'bg-[#B6BBC4]'} w-[400px] h-[15px] rounded-xl px-[5px] flex justify-start items-center`}>
                            <div className={`${theme === 'dark' ? 'bg-[#a828f6]' : 'bg-[#7f41c7]'} h-[9px] rounded-2xl transition-all duration-500`} style={{ width: `${questionID * 40}px` }}></div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-5">
                        {questions[questionID-1].options.map((el, i) => {
                            let bgClass = '';
                            if(answerStatus){
                                if(el === questions[questionID - 1].answer){
                                    bgClass = 'bg-green-500 text-white';
                                }else if(el === chosenAnswer){
                                    bgClass = 'bg-red-500 text-white';
                                }
                            }

                            return (
                                <div 
                                    key={i} 
                                    onClick={() => setChosenAnswer(el)}
                                    className={`
                                        ${theme === 'dark' ? 'bg-[#3c4d67] hover:bg-[#a828f6]' : 'bg-[#B6BBC4] hover:bg-[#7f41c7]'}
                                        ${chosenAnswer === el ? 'bg-[#a828f6] text-white' : theme === 'dark' ? 'bg-[#3c4d67] text-[#f5f6fb]' : 'bg-[#B6BBC4]'}
                                        ${bgClass}
                                        flex justify-start items-center gap-5 py-[11px] px-3 rounded-xl w-[500px] text-[18px] font-medium cursor-pointer hover:text-white transition-all duration-400
                                    `}
                                >
                                    <div 
                                        className={`
                                            ${theme === 'dark' ? 'bg-[#f5f6fb]' : 'bg-[#f5f5f5] text-black'}
                                            text-[20px] font-medium text-[#5f6775] w-10 h-10 flex justify-center items-center rounded-[7px]`
                                        }
                                    >
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    {el}
                                </div>
                            )
                        })}
                        <button 
                            onClick={handleSubmit} 
                            className={`
                                ${theme === 'dark' ? 'bg-[#a828f6]' : 'bg-[#7f41c7]'}
                                w-[500px] rounded-2xl py-[15px] text-[18px] font-medium text-[#f5f6fb] cursor-pointer hover:bg-[#891ecc] transition-all duration-500
                            `}
                        >
                            Submit answer
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
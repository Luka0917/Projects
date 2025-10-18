import { useContext } from "react"
import Header from "./Header"
import { ThemeContext } from "../context/ThemeProvider"

export default function AboutUs(){
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' 
            ? 'bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#000000] text-[#F5F5F5]' 
            : 'bg-gradient-to-br from-[#FFFFFF] via-[#F0F0F0] to-[#D9D9D9] text-[#1A1A1A]'}
            flex justify-start items-center flex-col h-screen transition duration-500`}
            >
            <Header page1='Home' page1Link='/' page2='Contact Us' page2Link='/ContactUs' page3='Courses' page3Link='/Courses' />
            <div className="flex justify-center items-center flex-col gap-[50px] m-[200px]">
                <div className={`${theme === 'dark' ? 'bg-[#2C2C2C]' : 'bg-[#B0B0B0]'} p-[30px] rounded-[24px]`}>
                    <p className="text-[40px] font-[700]">About Us</p>
                    <p className="text-[20px]">Our Name <b>"GOA"</b> Is Acronym Of <b>"Goal Oriented Academy"</b> Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Pariatur Autem Quibusdam Itaque Dolores Vel! Ipsum Recusandae Nihil, Perspiciatis Nulla Dignissimos Iste Animi Architecto Ut Qui Magnam, Harum Soluta, Repudiandae Quam Obcaecati Culpa Deserunt Quibusdam Sunt Inventore Commodi. Ut Ipsam Iure Autem. Deserunt Error Atque Enim Totam Tempora Asperiores, Iusto Perspiciatis?</p>
                </div>
                <div className="flex justify-center items-center gap-[50px]">
                    <img src="../src/assets/goa.jpeg" alt="Logo Of GOA" className="w-[300px] rounded-[24px]" />
                    <img src="../src/assets/GOA_martial_arts.jpg" alt="Logo Of GOA Martial Arts" className="w-[300px] rounded-[24px]" />
                </div>
            </div>
        </div>
    )
}
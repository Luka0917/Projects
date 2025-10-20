import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeProvider"
import Header from "./Header";
import { Link } from "react-router";

export default function ErrorPage(){
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' 
            ? 'bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#000000] text-[#F5F5F5]' 
            : 'bg-gradient-to-br from-[#FFFFFF] via-[#F0F0F0] to-[#D9D9D9] text-[#1A1A1A]'}
            flex justify-start items-center flex-col h-screen transition duration-500`}
            >
            <Header page1='About Us' page1Link='/AboutUs' page2='Contact Us' page2Link='/ContactUs' page3='Courses' page3Link='/Courses' />
            <div className="m-[200px] flex justify-center items-center flex-col gap-[30px]">
                <p className="text-[50px] font-[700]"><b>404</b> Page Not Found</p>
                <Link to={'/'} className="text-[20px] font-[500] hover:underline">Home Page</Link>
            </div>
        </div>
    )
}
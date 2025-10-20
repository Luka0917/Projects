import Header from './Header';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function ContactUs(){
    // ! localStorage.clear();

    const [_, setMessages] = useState([]);
    const {theme} = useContext(ThemeContext);
    const user = JSON.parse(localStorage.getItem('user'));

    function handleForm(formData){
        const message = formData.get('message');

        const time = new Date()
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const date = `${hours}:${minutes}:${seconds}`;

        const newMessage = {message: message, time: date};
        setMessages(prev => {
            const updated = [...prev, newMessage];
            localStorage.setItem('userMessages', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <div className={`${theme === 'dark' 
            ? 'bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#000000] text-[#F5F5F5]' 
            : 'bg-gradient-to-br from-[#FFFFFF] via-[#F0F0F0] to-[#D9D9D9] text-[#1A1A1A]'}
            flex justify-start items-center flex-col h-screen transition duration-500`}
            >
            <Header page1='About Us' page1Link='/AboutUs' page2='Home' page2Link='/' page3='Courses' page3Link='/Courses' />
            <div className={`${theme === 'dark' ? 'bg-[#2C2C2C]' : 'bg-[#B0B0B0]'} flex justify-center items-center flex-col p-[30px] rounded-[24px] gap-[50px] m-[200px]`}>
                <p className='text-[40px] font-[700]'>Contact Us</p>
                <div className='flex justify-center items-center gap-[300px]'>
                    <div className='flex justify-center items-center flex-col gap-[20px]'>
                        <p className='text-[25px] font-[600]'>Our Social Media Accounts</p>
                        <div className='flex justify-center items-center gap-[25px]'>
                            <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA" className='text-[30px] text-[#ff0033]'><FaYoutube /></a>
                            <a href="https://www.facebook.com/nika11keshelava" className='text-[30px] text-[#1877f2]'><FaFacebook /></a>
                            <a href="https://www.instagram.com/goal_oriented_academy__goa" className='text-[30px] text-[#fa0175]'><FaInstagram /></a>
                            <a href="https://www.tiktok.com/@goal_oriented_academy" className='text-[30px] text-[#ffffff]'><FaTiktok /></a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-[20px]'>
                        <p className='text-[25px] font-[600]'>Send Message</p>
                        <form action={handleForm} className='flex justify-center flex-col'>
                            {!user && 
                                <>
                                    <label htmlFor="email" className="text-[20px] font-[500]">Enter email to send a message</label> 
                                    <input type='email' id='email' name='email' placeholder='you@example.com' className="border rounded-[5px] focus:outline-none px-[5px] py[3px] text-[20px] w-[270px]" />
                                </>
                            }
                            <label htmlFor="message" className={`${!user && 'mt-[15px]'} text-[20px] font-[500]`}>Message</label>
                            <input type="text" id='message' name='message' required className="border rounded-[5px] focus:outline-none px-[5px] py[3px] text-[20px] w-[270px]" />
                            <button className={`${theme === 'dark' 
                                ? 'bg-[#F5F5F5] text-[#0D0D0D] hover:bg-transparent hover:text-[#F5F5F5] border-white' 
                                : 'bg-[#0D0D0D] text-[#F5F5F5] hover:bg-transparent hover:text-[#0D0D0D] border-black'} 
                                cursor-pointer border rounded-[5px] py-[3px] mt-[20px] font-[500] transition duration-200 w-[270px]`}
                                >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
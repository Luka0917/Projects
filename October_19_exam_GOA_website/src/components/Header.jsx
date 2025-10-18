import { Link } from 'react-router';
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

export default function Header({page1, page1Link, page2, page2Link, page3, page3Link}){
    const {theme, setTheme} = useContext(ThemeContext);
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='flex justify-between items-center my-[10px] px-[15px] w-[100%]'>
            <button
                onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                className={`${theme === 'dark' 
                    ? 'bg-[#F5F5F5] text-[#0D0D0D] hover:bg-transparent hover:text-[#F5F5F5] border-white' 
                    : 'bg-[#0D0D0D] text-[#F5F5F5] hover:bg-transparent hover:text-[#0D0D0D] border-black'} 
                    cursor-pointer border transition duration-200 rounded-[50%] text-[25px] w-[40px] h-[40px] flex justify-center items-center`}
                >
                {theme === 'dark' ? <MdSunny /> : <FaMoon />}
            </button>
            <nav className={`${theme === 'dark' ? 'bg-[#005F2F]' : 'bg-[#2E7D52]'} flex justify-center items-center gap-[50px] text-[20px] rounded-[12px] px-[30px] py-[8px]`}>
                <Link to={page1Link} className='hover:underline text-[#F5F5F5]'>{page1}</Link>
                <Link to={page2Link} className='hover:underline text-[#F5F5F5]'>{page2}</Link>
                <Link to={page3Link} className='hover:underline text-[#F5F5F5]'>{page3}</Link>
            </nav>
            {user ? (
                <div className='flex justify-center items-center gap-[10px]'>
                    <p>{user.username}</p>
                    <div 
                        className={`${theme === 'dark'
                            ? 'bg-[#F5F5F5] text-[#0D0D0D]'
                            : 'bg-[#0D0D0D] text-[#F5F5F5]'}
                            rounded-[50%] text-[25px] w-[40px] h-[40px] flex justify-center items-center transition duration-500`}
                        >
                        <FaUser />
                    </div>
                </div>
            ) : (<div></div>)}
        </div>
    )
}
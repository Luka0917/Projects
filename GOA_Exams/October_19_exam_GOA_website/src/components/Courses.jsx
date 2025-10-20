import Header from './Header'
import { useContext, useState } from "react"
import { ThemeContext } from '../context/ThemeProvider'

export default function Courses(){
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [_, setUserCourses] = useState([]);
    const [error, setError] = useState('');
    const {theme} = useContext(ThemeContext);

    function handleForm(formData){
        if(!JSON.parse(localStorage.getItem('user'))){
            setError('You must have an account to choose the course!');
        }else{
            const speed = formData.get('speed');
            const course = formData.get('course');

            const time = new Date()
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            const date = `${hours}:${minutes}:${seconds}`;

            const choosenCourse = {course: course, speed: speed, date: date};
            setUserCourses(prev => {
                const updated = [...prev, choosenCourse];
                localStorage.setItem('userCourses', JSON.stringify(updated));
                return updated;
            });
        }
    }

    return (
        <div className={`${theme === 'dark' 
            ? 'bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#000000] text-[#F5F5F5]' 
            : 'bg-gradient-to-br from-[#FFFFFF] via-[#F0F0F0] to-[#D9D9D9] text-[#1A1A1A]'}
            flex justify-start items-center flex-col h-screen transition duration-500`}
            >
            <Header page1='About Us' page1Link='/AboutUs' page2='Contact Us' page2Link='/ContactUs' page3='Home' page3Link='/' />
            <div className={`${theme === 'dark' ? 'bg-[#2C2C2C]' : 'bg-[#B0B0B0]'} p-[30px] rounded-[24px] m-[200px] flex justify-center items-start gap-[50px]`}>
                <div className='flex justify-center items-center flex-col gap-[20px]'>
                    <p className='text-[30px] font-[700]'>Register To Our Courses</p>
                    <form action={handleForm} className='flex justify-center flex-col'>
                        <label htmlFor="speed">How many times a week?</label>
                        <input type="number" id='speed' name='speed' placeholder='1-4' min={1} max={4} className='no-spinner border rounded-[5px] focus:outline-none px-[5px] py[3px] text-[20px] w-[200px] mt-[2px]' />
                        <div className='flex items-center gap-[5px] mt-[15px]'>
                            <input type="radio" id='web-dev' name='course' value="Web Development" required />
                            <label htmlFor="web-dev">Web Development</label>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[5px]'>
                            <input type="radio" id='game-dev' name='course' value="Game Development" required />
                            <label htmlFor="game-dev">Game Development</label>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[5px]'>
                            <input type="radio" id='robotech' name='course' value="Robotech" required />
                            <label htmlFor="robotech">Robotech</label>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[5px]'>
                            <input type="radio" id='algorithms' name='course' value="Algorithms" required />
                            <label htmlFor="algorithms">Algorithms</label>
                        </div>
                        <button className={`${theme === 'dark' 
                            ? 'bg-[#F5F5F5] text-[#0D0D0D] hover:bg-transparent hover:text-[#F5F5F5] border-white' 
                            : 'bg-[#0D0D0D] text-[#F5F5F5] hover:bg-transparent hover:text-[#0D0D0D] border-black'} 
                            cursor-pointer border rounded-[5px] py-[3px] mt-[20px] font-[500] transition duration-200 w-[200px]`}
                            >
                            Register
                        </button>
                    </form>
                    <p className="font-[500] text-red-500 text-center w-[250px]">{error}</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-[20px]'>
                    <div className={`${theme === 'dark' ? 'bg-[#0D0D0D]' : 'bg-[#F5F5F5]'} flex justify-center items-center gap-[50px] p-[20px] rounded-[24px]`}>
                        <button onClick={() => {title !== 'Web Development' ? (
                                    setTitle('Web Development'),
                                    setText("At our academy, you'll master full-stack development with hands-on training in both front-end and back-end technologies. Learn to build dynamic, scalable web applications using industry-standard tools like HTML, CSS, JavaScript, and Node.js. Gain real-world experience, create a professional portfolio, and unlock career opportunities in tech.")
                                ) : (
                                    setTitle(''),
                                    setText('')
                                )
                            }} 
                            className="cursor-pointer rounded-[5px] font-[500] hover:underline transition duration-200"
                            >
                            Web Development
                        </button>
                        <button onClick={() => {title !== 'Game Development' ? (
                                    setTitle('Game Development'),
                                    setText("At our academy, you'll dive into game development, learning to create immersive experiences using industry-standard tools. Master key skills in programming, 3D modeling, and game design with hands-on projects. Build your portfolio, gain real-world experience, and open the door to exciting career opportunities in the gaming industry.")
                                ) : (
                                    setTitle(''),
                                    setText('')
                                )
                            }} 
                            className='cursor-pointer rounded-[5px] font-[500] hover:underline transition duration-200'
                            >
                            Game Development
                        </button>
                        <button onClick={() => {title !== 'Robotech' ? (
                                    setTitle('Robotech'),
                                    setText("At our academy, you'll explore Robotech, combining robotics and technology to design and build advanced robotic systems. Learn programming, automation, and mechatronics through practical projects. Gain expertise in creating intelligent robots and automated solutions, preparing you for cutting-edge careers in robotics, AI, and technological innovation.")
                                ) : (
                                    setTitle(''),
                                    setText('')
                                )
                            }} 
                            className='cursor-pointer rounded-[5px] font-[500] hover:underline transition duration-200'
                            >
                            Robotech
                        </button>
                        <button onClick={() => {title !== 'Algorithms' ? (
                                    setTitle('Algorithms'),
                                    setText("At our academy, you'll master algorithms, learning essential concepts for solving complex problems efficiently. Gain expertise in data structures, sorting, searching, and optimization techniques. Through hands-on exercises and real-world applications, you'll develop problem-solving skills that are critical for success in software development, data science, and engineering.")
                                ) : (
                                    setTitle(''),
                                    setText('')
                                )
                            }} 
                            className='cursor-pointer rounded-[5px] font-[500] hover:underline transition duration-200'
                            >
                            Algorithms
                        </button>
                    </div>
                    <div className={`${theme === 'dark' && title
                            ? 'bg-[#0D0D0D]'
                            : theme === 'light' && title
                            ? 'bg-[#F5F5F5]'
                            : ''
                        } 
                        w-[620px] h-[350px] rounded-[24px] flex justify-center items-center flex-col gap-[20px] text-center p-[30px]`}
                        >
                        <b className='text-[30px]'>{title}</b>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useState, useContext } from "react";
import { ThemeContext } from './context/ThemeProvider';
import Header from "./components/Header"

function App() {
  // ! localStorage.clear();

  const [_, setUser] = useState({});
  const [error, setError] = useState('');
  const {theme} = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem('user'));

  function handleForm(formData){
    setError('');
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    if(password.length < 8){
      setError('Password must be 8 symbols long!');
    }else{
      let haveNumber = false;
      let haveSymbol = false;
      const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '~', '`'];
      for(let i = 0; i < password.length; i++){
        if(password[i] >= '0' && password[i] <= '9'){
          haveNumber = true;
        };
        if(symbols.includes(password[i])){
          haveSymbol = true;
        };
      };
      if(haveNumber && haveSymbol){
        const newUser = {username: username, email: email, password: password}
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
      }else{
        setError('Password must contain at least one number and one symbol!')
      }
    }
  }

  return (
    <>
      <div className={`${theme === 'dark' 
        ? 'bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#000000] text-[#F5F5F5]' 
        : 'bg-gradient-to-br from-[#FFFFFF] via-[#F0F0F0] to-[#D9D9D9] text-[#1A1A1A]'}
        flex justify-start items-center flex-col h-screen transition duration-500`}
        >
        <Header page1='About Us' page1Link='/AboutUs' page2='Contact Us' page2Link='/ContactUs' page3='Courses' page3Link='/Courses' />
        <div className="flex justify-between items-start mt-[200px] w-[100%] px-[200px]">
          <div className="flex justify-center items-start flex-col">
            <p className="text-[75px] font-[700] flex justify-center items-center">Welcome to G<b className="text-[#005F2F]">O</b>A!</p>
            <p className="text-[20px] font-[500] flex justify-center items-center">G<b className="text-[#005F2F]">O</b>A is the best academy for studing programming</p>
          </div>
          {!user && 
            <div className={`${theme === 'dark' 
              ? 'bg-[#2C2C2C]' 
              : 'bg-[#B0B0B0]'} 
              p-[30px] rounded-[24px] flex justify-center items-center flex-col gap-[20px] transition duration-500`}
              >
              <p className="text-[40px] font-[500]">Register</p>
              <form action={handleForm} className="flex justify-center flex-col">
                <label htmlFor="username" className="text-[20px] font-[500]">Username</label>
                <input type="text" id="username" name="username" required className="border rounded-[5px] focus:outline-none px-[5px] py[3px] text-[20px] w-[250px]" />

                <label htmlFor="email" className="mt-[15px] text-[20px] font-[500]">Email</label>
                <input type="email" id="email" name="email" required className="border rounded-[5px] focus:outline-none px-[5px] py[3px] text-[20px] w-[250px]" />

                <label htmlFor="password" className="mt-[15px] text-[20px] font-[500]">Password</label>
                <input type="password" id="password" name="password" required className="border rounded-[5px] focus:outline-none px-[5px] py[3px] text-[20px] w-[250px]" />

                <button className={`${theme === 'dark' 
                  ? 'bg-[#F5F5F5] text-[#0D0D0D] hover:bg-transparent hover:text-[#F5F5F5] border-white' 
                  : 'bg-[#0D0D0D] text-[#F5F5F5] hover:bg-transparent hover:text-[#0D0D0D] border-black'} 
                  cursor-pointer border rounded-[5px] py-[3px] mt-[20px] font-[500] transition duration-200`}
                  >
                  Register
                </button>
              </form>
              <p className="font-[500] text-red-500 text-center w-[250px]">{error}</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}
export default App
import { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";

function App() {
  const [word, setWord] = useState([]);
  const [isCorrect, setIsCorrect] = useState([]);
  const [heartCount, setHeartCount] = useState(5);
  const [loseGame, setLoseGame] = useState(false);

  useEffect(() => {
    async function func(){
      try{
        const fetcedData = await fetch('https://api.datamuse.com/words?sp=????????&max=1000');
        if(!fetcedData.ok){
          throw new Error('Error!');
        };
        const apiData = await fetcedData.json();
        setWord(apiData[Math.floor(Math.random() * apiData.length)].word.split(''));
      }catch(err){
        console.error(err);
      };
    };
    func();
  }, [loseGame]);

  function handleForm(formData){
    const inputLetter = formData.get('letter').toLowerCase();
    if(isCorrect.includes(inputLetter)) return;
    if(word.includes(inputLetter)){
      setIsCorrect(prev => [...prev, inputLetter]);
    }else{
      setHeartCount(prev => {
        const newCount = prev - 1;
        if(newCount === 0){
          setLoseGame(true);
        };
        return newCount;
      });
    };
    if(heartCount === 0){
      setLoseGame(true);
    };
  };

  function reset(){
    setLoseGame(false);
    setHeartCount(5);
    setIsCorrect([]);
    setWord([]);
  };

  console.log(word);

  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen bg-[#121212]'>
        {
          loseGame ? 
            <div className='bg-gray-700 p-[30px] flex justify-center items-center flex-col gap-[10px] rounded-[24px]'>
              <p className='text-[30px] font-[500] text-gray-200'>You lost!</p>
              <button onClick={reset} className='border border-gray-500 rounded-[7px] px-[5px] py-[2px] bg-gray-500 cursor-pointer hover:bg-gray-700 hover:text-gray-200 transition duration-200'>New Game</button>
            </div> 
          :
            <div className='rounded-[24px] p-[75px] bg-gray-700'>
              <div className='flex justify-center items-center gap-[20px]'>
                {[...Array(5)].map((_, i) => (
                  <FaHeart key={i} className={`text-[50px] ${i < heartCount ? 'text-red-500' : 'text-gray-400'}`}/>
                ))}
              </div>
              <div className='flex justify-center items-center gap-[10px] mt-[20px]'>
                {word.map((el, index) => <div key={index} className='w-[70px] h-[70px] bg-gray-500 flex justify-center items-center text-[30px] font-[500] text-white rounded-[10px]'>{isCorrect.includes(el) ? el : ''}</div>)}
              </div>
              <form action={handleForm} className='mt-[20px] flex justify-center items-center gap-[5px]'>
                <input type="text" maxLength={1} minLength={1} placeholder='Enter letter' name='letter' required className='border border-gray-500 text-gray-500 rounded-[7px] pl-[5px] py-[2px] focus:outline-none'/>
                <button className='border border-gray-500 rounded-[7px] px-[5px] py-[2px] bg-gray-500 cursor-pointer hover:bg-gray-700 hover:text-gray-200 transition duration-200'>Submit</button>
              </form>
            </div>
        }
      </div>
    </>
  );
};
export default App;
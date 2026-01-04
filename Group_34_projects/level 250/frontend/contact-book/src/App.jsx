import { IoPersonOutline as ContactIcon } from "react-icons/io5";
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  useEffect(() => {
    async function getContacts(){
      try{
        const response = await axios.get('http://localhost:3000/');
        setContacts(response.data.data);
        console.log(response.data.data);
      }catch(err){
        console.error(err);
      }
    }
    getContacts();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col pt-5 gap-5">
        <h1 className="text-2xl font-bold">Contact Book</h1>
        <form action="" className="flex justify-center items-center flex-col gap-5 w-[300px]">
          <input type="text" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-1 rounded w-full"/>

          <input type="text" id="tel" placeholder="Tel" value={tel} onChange={e => setTel(e.target.value)} className="border p-1 rounded w-full"/>

          <button className="border rounded px-5 py-0.5" onClick={() => {setContacts(prev => [...prev, { name, tel }]); axios.post('http://localhost:3000/', name, tel) }} >Submit</button>
        </form>
        <ul>
          {contacts.map(el => <Contact key={el.id} name={el.name} tel={el.tel} />)}
        </ul>
      </div>
    </>
  )
}

function Contact({ name, tel }) {
  return (
    <div className="flex items-center bg-gray-200 rounded p-2.5 w-[500px] gap-3">
      <ContactIcon size={40} />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="opacity-50">{tel}</p>
      </div>
    </div>
  )
}
export default App
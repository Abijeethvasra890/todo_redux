import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/firebase_config';
import { useNavigate } from 'react-router';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleRegister = async() =>{
        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            const userData = {email, password};
            await setDoc(doc(db,"users", user.uid), userData);
            alert("User Registered");
            navigate("/");
        }catch(err){
            alert(err.message);
        }
        
    }
  return (
    <>
    <Navbar />
    <div className='flex  py-28 items-center justify-center'>
        <div className='flex flex-col justify-center items-center'> 
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <input
                className="py-3 px-4 w-9/12 md:w-80 border-2 border-gray-200 rounded-lg text-md mb-3"
                type='text'
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                className="py-3 px-4 w-9/12 md:w-80 border-2 border-gray-200 rounded-lg text-md mb-5" 
                type='password'
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='flex flex-col'> 
                <button 
                    className="bg-black hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-56 mb-3 mr-3"
                    onClick={handleRegister}>Register and Sign In</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db, googleProvider } from '../../Firebase/firebase_config';
import Navbar from '../Navbar/Navbar';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Register from './Register';


export const handleSignOut = async() => {
    try{
        await signOut(auth);
        alert("User Signed Out");
    }catch(err){
        alert(err);
    }
}

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(auth?.currentUser?.email);

   

    const handleSignIn = async() =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
            alert("User Signed In");
            console.log(auth?.currentUser?.uid);
        }catch(err){
            alert(err.message);
        }
        
    }

    const handleSignInGoogle = async() =>{
        try{
            const {user} = await signInWithPopup(auth, googleProvider);
            const userData = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            };
            await setDoc(doc(db,"users", user.uid), userData);
            alert("User Signed In");
        }catch(err){
            alert(err);
        }
    }

   

  return (
    <>
    <Navbar />
    <div className='flex  py-28 items-center justify-center'>
        <div className='flex flex-col justify-center items-center'> 
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
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
                    onClick={handleSignIn}>Sign In</button>
                <button 
                    className="flex items-center justify-center bg-black hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-56 mb-3"
                    onClick={handleSignInGoogle}>
                    <span>Sign In with</span>
                    <img className='w-8 h-8 ml-2' src='https://static.vecteezy.com/system/resources/previews/013/760/951/original/colourful-google-logo-in-dark-background-free-vector.jpg' alt='Google Logo'/>
                </button>
                <p>Don't have a account? <Link to='/register'>Register Now</Link></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Auth
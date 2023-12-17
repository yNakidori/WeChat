import React, { useState } from 'react'
import Add from '../img/folder-add.svg'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {

    const [err, setErr] = useState(false)
    const handleSunmit = async (e) => {

      e.preventDefault()
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

      try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
    setErr(true);

  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      })

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
    });
  }
);

      }catch(err){
        setErr(true);
      }
    };

  return (
    <div className='formContainer'>

        <div className='formWrapper'>

            <span className='logo'>WeChat</span>
            <span className='title'>Register</span>

            <form onSubmit={handleSunmit}>

                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display: 'none'}} type="file" id='file' />
                <label htmlFor="file">
                    <img src={Add} alt='' />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Somethin went wrong</span> }
            </form>

            <p>Already have a account? Login</p>
        </div>
    </div>
    
  )
}

export default Register
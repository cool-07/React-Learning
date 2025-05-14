import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { useCallback, useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength]=useState(8);
  const [numberAllowed, isNumberAllowed]=useState(false);
  const [characterAllowed, isCharacterAllowed]=useState(false);
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null);
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(characterAllowed){
      str+="!@#$%^&*()_+"
    }
    for(let i=1;i<length;i++){
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str[char]
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed])

  const copyToClipboard= useCallback(()=>{
    passwordRef.current?.focus();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
    <div className="container text-center mt-5">
  <div className="input-group mb-3">
    <input
      type="text"
      value={password}
      className="form-control"
      placeholder="Password"
      ref={passwordRef}
      readOnly
    />
    <button onClick={copyToClipboard} className="btn btn-outline-light">
      Copy
    </button>
  </div>

  <div className="mb-3">
    <input
      type="range"
      value={length}
      min={8}
      max={100}
      onChange={(e) => setLength(e.target.value)}
    />
    <label className="text-light ms-2">Length: {length}</label>
  </div>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="checkbox"
      id="number"
      checked={numberAllowed}
      onChange={() => isNumberAllowed((prev) => !prev)}
    />
    <label className="form-check-label text-light" htmlFor="number">
      Include Numbers
    </label>
  </div>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="checkbox"
      id="char"
      checked={characterAllowed}
      onChange={() => isCharacterAllowed((prev) => !prev)}
    />
    <label className="form-check-label text-light" htmlFor="char">
      Include Special Characters
    </label>
  </div>
</div>

    {/* <button className='btn btn-primary' type='submit' onClick={passwordGenerator}></button> */}
    </>
  );
}



export default App;

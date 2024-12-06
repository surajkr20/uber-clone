// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(email, password)

    // store the data's in object
    setUserData({
      email: email,
      password: password
    })

    // for clear form
    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <img
          className="w-[6rem]"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="font-serif text-xl font-medium mb-2">
            What&apos;s your Email
          </h3>
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] w-full px-4 py-2 border-2 placeholder:text-lg mb-7"
          />
          <h3 className="font-serif text-xl font-medium mb-2">
            Enter Password
          </h3>
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            required
            placeholder="Enter a strong password"
            className="bg-[#eeeeee] w-full px-4 py-2 border-2 placeholder:text-lg mb-7"
          />
          <button className="bg-[#111] text-white font-bold text-lg w-full px-4 py-3 placeholder:text-lg">
            Continue
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <Link
        to="/captain-login"
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;

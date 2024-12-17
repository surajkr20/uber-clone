// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext); // Access setUser

  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const newUser = {
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email: email,
        password: password,
      };
  
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
  
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user); // Update user context
        localStorage.setItem('token',data.token); // home route protected
        navigate('/home');
      }
  
      // Clear form fields
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up user:", error.message);
    }
  };
  
  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <img
          className="w-[7rem] relative"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="font-serif text-base font-sm mb-2">
            What&apos;s your Name
          </h3>
          <div className="flex gap-4">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              required
              placeholder="First Name"
              className="bg-[#eeeeee] px-4 py-2 border-2 placeholder:text-base mb-6 w-1/2"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required
              placeholder="Last Name"
              className="bg-[#eeeeee] px-4 py-2 border-2 placeholder:text-base mb-6 w-1/2"
            />
          </div>
          <h3 className="font-serif text-base font-medium mb-2">
            What&apos;s your Email
          </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] w-full px-4 py-2 border-2 placeholder:text-sm mb-7"
          />
          <h3 className="font-serif text-base font-medium mb-2">
            Enter Password
          </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter a strong password"
            className="bg-[#eeeeee] w-full px-4 py-2 border-2 placeholder:text-sm mb-7"
          />
          <button className="bg-[#111] text-white font-bold text-lg w-full px-4 py-3 placeholder:text-xl"
          type="submit">
            Create an account as User
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            login here
          </Link>
        </p>
      </div>
      <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the{" "}
        <span className="underline">Google Privacy Policy</span> and{" "}
        <span className="underline">Terms of Service apply</span>.
      </p>
    </div>
  );
};

export default UserSignup;


// onClick={()=>{
//   if (!firstName || !email || !password) {
//     alert("Please fill in all fields before submitting!");
//     return; // Stop execution
//   }else navigate('/home')
// }}
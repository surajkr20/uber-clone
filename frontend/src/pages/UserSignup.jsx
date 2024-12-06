// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userSignupData, setUserSignupData] = useState({});
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    // store the data's in object
    setUserSignupData({
      username:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
    });

    // for clear form
    setFirstName(""),
    setLastName(""),
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <img
          className="w-[8rem] relative left-[-8vw]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwyFRO5u7QIXet8IQWT-kesmK8HQdbmzyG6wRbk-FxjiyCrKwow9PKCzFgAi9PwCmBQs&usqp=CAU"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="font-serif text-base font-sm mb-2">
            What&apos;s your Name
          </h3>
          <div className="flex gap-4">
            <input
              value={firstName}
              onChange={(e) => {
                submitHandler(e);
              }}
              type="text"
              required
              placeholder="First Name"
              className="bg-[#eeeeee] px-4 py-2 border-2 placeholder:text-base mb-6 w-1/2"
            />
            <input
              value={lastName}
              onChange={(e) => {
                submitHandler(e);
              }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="Enter a strong password"
            className="bg-[#eeeeee] w-full px-4 py-2 border-2 placeholder:text-sm mb-7"
          />
          <button className="bg-[#111] text-white font-bold text-lg w-full px-4 py-3 placeholder:text-xl">
            Continue
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

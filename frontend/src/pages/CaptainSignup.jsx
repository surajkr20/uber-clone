/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  // State hooks for handling form data
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  // const [captainSignupData, setCaptainSignupData] = useState({});
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');

  // Vehicle-related state hooks
  const [vehicleColor, setVehicleColor] = useState(''); 
  const [vehiclePlate, setVehiclePlate] = useState(''); 
  const [vehicleCapacity, setVehicleCapacity] = useState(''); 
  const [vehicleType, setVehicleType] = useState(''); 

  // Accessing context data for captain state management
  const { captain, setCaptain } = useContext(CaptainDataContext);

  // Resets all form fields to their initial state
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  // Handles the form submission
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    // Collects all form data into a structured object
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    console.log(captainData.vehicle)

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain); // Update user context
      localStorage.setItem('token',data.token); // home route protected
      navigate('/captain-home');
    }

    resetForm(); // Clears the form fields
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      {/* Form header and logo */}
      <div className="flex flex-col gap-4">
        <img
          className="w-[8rem] relative left-[-8vw]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwyFRO5u7QIXet8IQWT-kesmK8HQdbmzyG6wRbk-FxjiyCrKwow9PKCzFgAi9PwCmBQs&usqp=CAU"
          alt="Logo"
        />
        <form onSubmit={submitHandler}>
          {/* Name input fields */}
          <h3 className="font-serif text-base font-sm mb-2">
            What&apos;s your Name
          </h3>
          <div className="flex gap-4">
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              required
              placeholder="First Name"
              className="bg-[#eeeeee] px-4 py-2 border-2 placeholder:text-base mb-6 w-1/2"
              aria-label="First Name"
            />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              required
              placeholder="Last Name"
              className="bg-[#eeeeee] px-4 py-2 border-2 placeholder:text-base mb-6 w-1/2"
              aria-label="Last Name"
            />
          </div>
          {/* Email input field */}
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
            aria-label="Email"
          />
          {/* Password input field */}
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
            placeholder="Enter your password"
            className="bg-[#eeeeee] w-full px-4 py-2 border-2 placeholder:text-sm mb-7"
            aria-label="Password"
          />
          {/* Vehicle Information section */}
          <h3>Vehicle Information</h3>
          <div className='flex flex-col mt-2'>
            <div className='flex gap-2'>
            <input
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              type="text"
              required
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border-2 placeholder:text-sm mb-7"
              aria-label="Vehicle Color"
            />
            <input
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              type="text"
              required
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border-2 placeholder:text-sm mb-7"
              aria-label="Vehicle Plate"
            />
            </div>
            <div className='flex gap-2'>
            <input
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              type="number"
              required
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border-2 placeholder:text-sm mb-7"
              aria-label="Vehicle Capacity"
            />
            {/* Dropdown for vehicle type selection */}
            <select
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              required
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border-2 placeholder:text-sm mb-7"
              aria-label="Vehicle Type"
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
            </div>
          </div>
          {/* Submit button */}
          <button className="bg-[#111] text-white font-bold text-lg w-full px-4 py-3 placeholder:text-xl">
            Create Captain Account
          </button>
        </form>
        {/* Link to login page */}
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-600">
            login here
          </Link>
        </p>
      </div>
      {/* Footer information */}
      <p className="text-[10px] leading-tight mt-4">
        This site is protected by reCAPTCHA and the{' '}
        <span className="underline">Google Privacy Policy</span> and{' '}
        <span className="underline"></span>
      </p>
    </div>
  );
};

export default CaptainSignup;

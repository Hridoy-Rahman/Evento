// Register.js
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Register = () => {
  const {event} = useLoaderData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    transactionMethod: 'Bkash',
    transactionId: ''
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Registration Data:', formData);

    // Simulate successful registration
    setTimeout(() => {
      setRegistrationSuccess(true);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-banner-gradient shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gradient text-center mb-8">Register for {event.title}</h1>
      {registrationSuccess ? (
        <div className="text-center text-green-800 font-bold">
          Registration successful! Thank you for registering for {event.title}.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact No</label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Transaction Method</label>
              <select
                name="transactionMethod"
                value={formData.transactionMethod}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              >
                <option value="Bkash">Bkash</option>
                <option value="Nagad">Nagad</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Transaction ID</label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;

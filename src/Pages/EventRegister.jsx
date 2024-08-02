import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const { event } = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(user.email,event._id)


  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    transactionMethod: 'Bkash',
    transactionId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          email: user.email,
          eventId: event._id.toString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.message === 'You have already registered for this event.') {
          Swal.fire({
            title: 'Already Registered!',
            text: `You have already registered for ${event.title}.`,
            icon: 'info',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Registration Successful!',
            text: `Thank you for registering for ${event.title}.`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      Swal.fire({
        title: 'Already Registered!',
        text: `You have already registered for ${event.title}.`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }
  };


  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gradient text-center mb-8">Register for {event.title}</h1>
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
    </div>
  );
};

export default Register;

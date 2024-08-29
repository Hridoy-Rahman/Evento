import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const AddEvent = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        title: '',
        event_banner_picture: '',
        category: '',
        university_name: '',
        chief_guest: '',
        date: '',
        time: '',
        venue: '',
        address: '',
        available_seats:'',
        contact_no: '',
        contact_email: '',
        registration_fee: '',
        event_description: '',
        event_details: '',
        registration_form_link: '',
        events: []
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Adding the user email to the form data
        const formDataWithEmail = { ...formData, user_email: user.email };

        try {
            const response = await fetch('https://evento-backend-six.vercel.app/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataWithEmail)
            });

            // Check if the response is OK (status code 2xx)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            console.log('Response:', data);
            if (data.insertedId) {
                Swal.fire(
                    'Success',
                    'You added the event successfully',
                    'success'
                );
                // Redirect to the create event page
                navigate('/createevent');
            } else {
                Swal.fire(
                    'Error',
                    'There was an issue adding the event. Please try again.',
                    'error'
                );
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire(
                'Error',
                'There was an issue adding the event. Please try again.',
                'error'
            );
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gradient text-center mb-8">Create New Event</h1>
            <h1 className="text-xl font-bold text-red-500 text-center mb-8">*Please use your institutional email</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Event Banner Picture URL</label>
                        <input
                            type="text"
                            name="event_banner_picture"
                            value={formData.event_banner_picture}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">University Name</label>
                        <input
                            type="text"
                            name="university_name"
                            value={formData.university_name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Chief Guest</label>
                        <input
                            type="text"
                            name="chief_guest"
                            value={formData.chief_guest}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Venue</label>
                        <input
                            type="text"
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contact Number</label>
                        <input
                            type="tel"
                            name="contact_no"
                            value={formData.contact_no}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contact Email</label>
                        <input
                            type="email"
                            name="contact_email"
                            value={formData.contact_email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Registration Fee</label>
                        <input
                            type="text"
                            name="registration_fee"
                            value={formData.registration_fee}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Available Seats</label>
                        <input
                            type="text"
                            name="available_seats"
                            value={formData.available_seats}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Event Description</label>
                        <textarea
                            name="event_description"
                            value={formData.event_description}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700">Event Details</label>
                        <textarea
                            name="event_details"
                            value={formData.event_details}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700">Registration Form Link</label>
                        <input
                            type="text"
                            name="registration_form_link"
                            value={formData.registration_form_link}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Events (Comma separated)</label>
                        <input
                            type="text"
                            name="events"
                            value={formData.events}
                            onChange={(e) => setFormData({ ...formData, events: e.target.value.split(',') })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-10"
                            required
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <button type="submit" className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                        Add Event
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;

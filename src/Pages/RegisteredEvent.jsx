import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';

const RegisteredEvents = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  useEffect(() => {
    const fetchRegisteredEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/register/user/${userEmail}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const currentDate = new Date();
        // Filter events to include only upcoming events
        const upcomingEvents = data.filter(event => new Date(event.date) >= currentDate);
        // Sort events by date
        const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
        // Set events state
        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching registered events:", error);
      }
    };

    fetchRegisteredEvents();
  }, [userEmail]);

  return (
    <div className="mb-12 lg:mb-8">
      <h1 className="text-5xl text-gradient font-bold text-center mt-8 mb-12">
        Your Registered Events
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-12">
        {events.map((event) => (
          <div key={event._id} className="p-4">
            <div className="space-y-7 px-4 py-4 rounded-lg bg-banner-gradient flex flex-col items-center h-full">
              <img
                src={event.event_banner_picture}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg mt-4 rounded-lg"
              />
              <div className="mt-4 flex-grow">
                <h2 className="text-2xl font-bold text-gradient">{event.title}</h2>
                <p className="text-gray-600 mt-2">{event.event_description}</p>
                <p className="text-gray-800 mt-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-800">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-800">
                  <strong>Venue:</strong> {event.venue}
                </p>
                <p className="text-gray-800">
                  <strong>Address:</strong> {event.address}
                </p>
                <p className="text-gray-800">
                  <strong>Contact:</strong> {event.contact_no}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisteredEvents;

import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-gradient font-bold text-center mt-8">
        Upcoming Events
      </h1>
      <p className="text-xl text-gradient font-semibold text-center mt-4 mb-12">
        Register to your desired event
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {events.map((event) => (
          <div
            key={event.event_id}
            className="bg-white shadow-md rounded-lg p-4 bg-banner-gradient flex flex-col"
          >
            <img
              src={event.event_banner_picture}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
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
            <a
              href={event.registration_form_link}
              className="mt-auto text-center bg-orange-500 text-white font-bold py-2 px-4 rounded"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

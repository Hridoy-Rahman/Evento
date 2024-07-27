import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Events = ({ limit }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const currentDate = new Date();
        // Filter events to include only upcoming events
        const upcomingEvents = data.filter(event => new Date(event.date) >= currentDate);
        // Sort events by date
        const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
        // Set events state
        setEvents(sortedEvents);
      });
  }, []);

  // Take the first 'limit' events from the sorted upcoming events
  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <div>
      <h1 className="text-5xl text-gradient font-bold text-center mt-8">
        Upcoming Events
      </h1>
      <p className="text-xl text-gradient font-semibold text-center mt-4 mb-12">
        Register to your desired event
      </p>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="w-full lg:w-3/4 lg:mx-auto">
        {displayedEvents.map((event) => (
          <div key={event.event_id} className="p-4">
            <div className="space-y-7 pl-12 px-4  rounded-lg lg:px-12 bg-banner-gradient flex flex-col">
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
              {/* <Link
                to={`/event/${event.event_id}`}
                className="mt-auto text-center bg-orange-500 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </Link> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Events;

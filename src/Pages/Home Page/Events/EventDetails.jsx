import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const EventDetails = () => {
  const { event } = useLoaderData();

  if (!event) return <div>Loading...</div>;

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 shadow-xl bg-banner-gradient rounded-lg">
      <h1 className="text-5xl font-bold text-gradient text-center mb-8">
        {event.title}
      </h1>
      <img
        src={event.event_banner_picture}
        alt={event.title}
        className="w-full h-64 object-cover rounded-t-lg mb-4"
      />
      <div className="mb-4">
        <p className="text-xl text-gray-800 mb-2">
          <strong>Category:</strong> {event.category}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>University:</strong> {event.university_name}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Chief Guest:</strong> {event.chief_guest}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Time:</strong> {event.time}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Venue:</strong> {event.venue}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Address:</strong> {event.address}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Contact Number:</strong> {event.contact_no}
        </p>
        <p className="text-xl text-gray-800 mb-2">
          <strong>Contact Email:</strong> {event.contact_email}
        </p>
        <p className="text-xl text-gray-800 mb-4">
          <strong>Registration Fee:</strong> {event.registration_fee}
        </p>
        <p className="text-xl text-gray-800 mb-4">
          <strong>Event Description:</strong> {event.event_description}
        </p>
        <p className="text-xl text-gray-800 mb-4">
          <strong>Event Details:</strong> {event.event_details}
        </p>
        <h2 className="text-3xl font-bold text-gradient mb-4">Events:</h2>
        <ul className="list-disc list-inside mb-4">
          {event.events.map((ev, index) => (
            <li key={index} className="text-xl text-gray-800">
              {ev}
            </li>
          ))}
        </ul>
        <p className="text-xl text-gray-800 mb-4">
          <strong>Registration Form:</strong>{" "}
          <a href={`${event.registration_form_link}`} target="_blank">
            {event.registration_form_link}
          </a>
        </p>
        <p className="text-gray-800">
          <strong>Available Seats:</strong> {event.available_seats}
        </p>
        <div className="flex justify-center mt-4">
          {event.available_seats > 0 ? (
            <Link
              to={`/register/${event._id}`}
              className="text-center bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            >
              Register Here
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="text-center bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
            >
              Registration Closed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

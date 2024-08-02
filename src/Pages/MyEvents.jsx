import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdPeople } from "react-icons/md";
import Swal from 'sweetalert2';
import UpdateEventModal from "./UpdateEventModal";
import ViewRegisteredModal from "./ViewRegisteredModal"; // Import the new modal

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewRegisteredModalOpen, setViewRegisteredModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const { user } = useContext(AuthContext);
  const userEmail = user.email; // Use the logged-in user's email

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/events/user/${userEmail}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching user events:", error);
      }
    };

    fetchEvents();
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure you want to delete?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        // Send delete request
        const response = await fetch(`http://localhost:8000/events/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          // Handle non-200 status codes
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error('Failed to delete the event');
        }

        const data = await response.json();
        // console.log(data);

        if (data.message === 'Event deleted successfully') {
          // Remove the deleted event from state
          const remainingEvents = events.filter(event => event._id !== id);
          setEvents(remainingEvents);

          // Show success alert
          Swal.fire(
            'Deleted!',
            'Your event has been deleted.',
            'success'
          );
        } else {
          throw new Error(data.message);
        }
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      Swal.fire(
        'Error!',
        'There was a problem deleting the event.',
        'error'
      );
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleUpdate = (updatedEvent) => {
    setEvents(events.map(event => (event._id === updatedEvent._id ? updatedEvent : event)));
  };

  const handleViewRegistered = (eventId) => {
    setSelectedEventId(eventId);
    setViewRegisteredModalOpen(true);
  };

  const handleViewRegisteredModalClose = () => {
    setViewRegisteredModalOpen(false);
    setSelectedEventId(null);
  };

  return (
    <div className="mb-12 lg:mb-8 ">
      <h1 className="text-3xl text-gradient font-bold text-center mt-8 mb-12">
        Your Created Events
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-12">
        {events.map((event) => (
          <div key={event._id} className="p-4">
            <div className="space-y-7 px-4 py-4 rounded-lg bg-gray-100 flex flex-col items-center h-full">
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
              <div className="relative flex w-1/3 justify-between">
                <button
                  onClick={() => handleEdit(event)}
                  className="relative flex items-center justify-center text-purple-900 hover:text-purple-500 font-bold py-2 w-40 rounded"
                >
                  <FaEdit className="text-2xl" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Edit
                  </span>
                </button>

                <button
                  onClick={() => handleDelete(event._id)}
                  className="relative flex items-center justify-center text-purple-900 hover:text-purple-500 font-bold py-2 w-40 rounded"
                >
                  <MdDelete className="text-2xl" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Delete
                  </span>
                </button>

                <button
                  onClick={() => handleViewRegistered(event._id)}
                  className="relative flex items-center justify-center text-purple-900 hover:text-purple-500 font-bold py-2 w-40 rounded"
                >
                  <MdPeople className="text-2xl"/>
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    View Registered
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Event Modal */}
      {selectedEvent && (
        <UpdateEventModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          event={selectedEvent}
          onUpdate={handleUpdate}
        />
      )}

      {/* View Registered People Modal */}
      {viewRegisteredModalOpen && (
        <ViewRegisteredModal
          isOpen={viewRegisteredModalOpen}
          onClose={handleViewRegisteredModalClose}
          eventId={selectedEventId}
        />
      )}
    </div>
  );
};

export default MyEvents;

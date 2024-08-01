import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";

const UpdateEventModal = ({ isOpen, onRequestClose, event, onUpdate }) => {
  const [updatedEvent, setUpdatedEvent] = useState(event);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, ...eventWithoutId } = updatedEvent;

    try {
      const response = await fetch(`http://localhost:8000/events/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventWithoutId),
      });

      if (response.ok) {
        onUpdate(updatedEvent); // Update the event in the parent component
        onRequestClose(); // Close the modal

        Swal.fire({
          title: "Success!",
          text: "Event updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        throw new Error("Failed to update the event");
      }
    } catch (error) {
      console.error("Error updating event:", error);

      Swal.fire({
        title: "Error!",
        text: "Failed to update the event",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="max-w-4xl mx-auto my-8 p-4 bg-banner-gradient shadow-md rounded-lg">
        <h2 className="text-center text-gradient text-3xl font-bold mb-8">
          Edit Event
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={updatedEvent.title}
                onChange={handleChange}
                placeholder="Event Title"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={updatedEvent.category}
                onChange={handleChange}
                placeholder="Category"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Banner Picture URL</label>
              <input
                type="text"
                name="event_banner_picture"
                value={updatedEvent.event_banner_picture}
                onChange={handleChange}
                placeholder="Event Banner Picture URL"
                className="mt-1  mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">University</label>
              <input
                type="text"
                name="university_name"
                value={updatedEvent.university_name}
                onChange={handleChange}
                placeholder="University Name"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Events</label>
              <input
                type="text"
                name="events"
                value={updatedEvent.events.join(", ")}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "events",
                      value: e.target.value.split(", "),
                    },
                  })
                }
                placeholder="Events (comma separated)"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Chief Guest</label>
              <input
                type="text"
                name="chief_guest"
                value={updatedEvent.chief_guest}
                onChange={handleChange}
                placeholder="Chief Guest"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Details</label>
              <textarea
                name="event_details"
                value={updatedEvent.event_details}
                onChange={handleChange}
                placeholder="Event Details"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
              <label className="block text-gray-700">Description</label>
              <textarea
                name="event_description"
                value={updatedEvent.event_description}
                onChange={handleChange}
                placeholder="Event Description"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700">
                Registration form link
              </label>
              <input
                type="url"
                name="registration_form_link"
                value={updatedEvent.registration_form_link}
                onChange={handleChange}
                placeholder="Registration Form Link"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Registration Fee</label>
              <input
                type="text"
                name="registration_fee"
                value={updatedEvent.registration_fee}
                onChange={handleChange}
                placeholder="Registration Fee"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={updatedEvent.date}
                onChange={handleChange}
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={updatedEvent.time}
                onChange={handleChange}
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Venue</label>
              <input
                type="text"
                name="venue"
                value={updatedEvent.venue}
                onChange={handleChange}
                placeholder="Event Venue"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={updatedEvent.address}
                onChange={handleChange}
                placeholder="Event Address"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contact_no"
                value={updatedEvent.contact_no}
                onChange={handleChange}
                placeholder="Contact Number"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Contact Email</label>
              <input
                type="email"
                name="contact_email"
                value={updatedEvent.contact_email}
                onChange={handleChange}
                placeholder="Contact Email"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
              <label className="block text-gray-700">Available Seats</label>
              <input
                type="number"
                name="available_seats"
                value={updatedEvent.available_seats}
                onChange={handleChange}
                placeholder="Available Seats"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm h-10"
                required
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              type="submit"
              className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onRequestClose}
              className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateEventModal;

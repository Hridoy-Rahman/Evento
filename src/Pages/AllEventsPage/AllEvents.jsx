import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination"; // Import the pagination component

const AllEvents = ({ limit }) => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const eventsPerPage = 9; // Items per page

  // Fetch events on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`https://evento-backend-six.vercel.app/events`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        const currentDate = new Date();
        const upcomingEvents = data.filter(
          (event) => new Date(event.date) >= currentDate
        );
        const sortedEvents = upcomingEvents.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter events by search query and selected category
  const filteredEvents = events.filter((event) => {
    const matchesSearchQuery = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || event.category === selectedCategory;
    return matchesSearchQuery && matchesCategory;
  });

  // Pagination Logic: Calculate the current displayed events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Calculate total pages
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-12 lg:mb-8 px-4 lg:px-12">
      <h1 className="text-3xl text-gradient font-bold text-center mt-8">
        All Upcoming Events
      </h1>
      <p className="text-xl text-gradient font-semibold text-center mt-4 mb-12">
        Register to your desired event
      </p>

      {/* Search input */}
      <div className="pl-4">
        <input
          type="text"
          placeholder="Search events by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Category filter */}
      <div className="pl-4 mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select a category</option>{" "}
              {/* Placeholder option */}
              <option value="Cultural">Cultural</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Sports">Sports</option>
              <option value="Conference">Conference</option>
              <option value="Community Service">Community Service</option>
              <option value="Contest">Contest</option>
              <option value="Social">Social</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Job Fair">Job Fair</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10"></div>
        </div>
      ) : (
        <div>
          {/* Display Events */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {currentEvents.map((event) => (
              <div key={event._id} className="p-4">
                <div className="space-y-7 pl-12 px-4 py-4 rounded-lg lg:px-12 bg-gray-100 flex flex-col shadow-lg items-center h-full">
                  <img
                    src={event.event_banner_picture}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg mt-4 rounded-lg"
                  />
                  <div className="mt-4 flex-grow">
                    <h2 className="text-2xl font-bold text-gradient">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{event.event_description}</p>
                    <p className="text-gray-800 mt-2">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-gray-800">
                      <strong>Contact:</strong> {event.contact_no}
                    </p>
                    <p className="text-gray-800">
                      <strong>Available Seats:</strong> {event.available_seats}
                    </p>
                  </div>
                  <Link
                    to={`/events/${event._id}`}
                    className="mt-auto text-center bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 w-40 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default AllEvents;

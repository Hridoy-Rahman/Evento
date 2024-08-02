import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ViewRegisteredModal = ({ eventId, isOpen, onClose }) => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
//   console.log(eventId)

  useEffect(() => {
    if (isOpen) {
      const fetchRegistrations = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `http://localhost:8000/registrations/event/${eventId}`
          );
          if (response.ok) {
            const data = await response.json();
            setRegistrations(data);
            console.log(data)
          } else {
            throw new Error("Failed to fetch registrations");
          }
        } catch (error) {
          console.error("Error fetching registrations:", error);
          Swal.fire({
            title: "Error!",
            text: "Could not fetch registrations. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } finally {
          setLoading(false);
        }
      };

      fetchRegistrations();
    }
  }, [eventId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-4">Registered People</h2>
          <button
            onClick={onClose}
            className="font-bold text-xl"
          >
            X
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            {registrations.length === 0 ? (
              <p>No one has registered yet for this event.</p>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction ID
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrations.map((registration) => (
                    <tr key={registration._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {registration.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {registration.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {registration.contactNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {registration.transactionMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {registration.transactionId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewRegisteredModal;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting with Team', date: '2025-10-20' },
    { id: 2, title: 'Doctor\'s Appointment', date: '2025-10-22' }
  ]);

  const [formData, setFormData] = useState({ title: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.date) {
      const newEvent = {
        id: Date.now(),
        ...formData,
      };
      setEvents([...events, newEvent]);
      setFormData({ title: '', date: '' });
    }
  };

  /**
   * Deletes an event from the list.
   * @param {number} id - The ID of the event to delete.
   */
  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-2xl bg-brand-ash rounded-xl shadow-lg p-6 sm:p-8">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">My Calendar</h1>
        </header>

        <section className="mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              name="title"
              placeholder="New Event Title"
              value={formData.title}
              onChange={handleChange}
              className="flex-grow w-full px-4 py-2 text-gray-700 bg-brand-mint border border-brand-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-brand-mint border border-brand-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-tea focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 transition-colors"
            >
              Add Event
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">Upcoming Events</h2>
          <ul className="space-y-4">
            {sortedEvents.length > 0 ? (
              sortedEvents.map(event => (
                <li
                  key={event.id}
                  className="bg-gray-50 p-4 rounded-lg flex justify-between items-center border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    aria-label={`Delete event ${event.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No events scheduled.</p>
              </div>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;

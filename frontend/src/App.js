import React, { useState } from 'react';
import './App.css';

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting with Team', date: '2025-10-20' },
    { id: 2, title: 'Doctor Appointment', date: '2025-10-22' }
  ]);

  const [formData, setFormData] = useState({ title: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { id: events.length + 1, ...formData }]);
    setFormData({ title: '', date: '' });
  }

  return (
    <div className="App">
      <h1>My Calendar</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = { title, description, location, date, capacity };
    await axios.post("/api/events", event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Capacity" />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;

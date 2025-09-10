import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const EventContext = createContext();


export const EventProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const res = await axios.get("/events.json");
        setMovies(res.data.movies || []);
        setEvents(res.data.events || []);
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Failed to fetch events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ movies, events, loading }}>
      {children}
    </EventContext.Provider>
  );
};


export const useEventContext = () => useContext(EventContext);

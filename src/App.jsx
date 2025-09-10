import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { EventProvider } from "./context/EventContext"; //  import provider
import EventDetail from "./pages/EventDetail";
import Bookingpage from "./pages/Bookingpage";

const App = () => {
  return (
    <EventProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<EventDetail/>} />
        <Route path="/book/:type/:id" element={<Bookingpage/>} />
      </Routes>
    </EventProvider>
  );
};

export default App;
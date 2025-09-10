import { useNavigate, useParams } from "react-router-dom";
import { useEventContext } from "../context/EventContext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Button from "../components/Button";


const EventDetails = () => {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const { movies, events, loading } = useEventContext(); // Global data

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  let item;

  if (type === "movie") {
    item = movies.find((m) => String(m.id) === id);
  } else if (type === "event") {
    item = events.find((e) => String(e.id) === id);
  }

  if (!item) {
    return <p className="text-center mt-20">Item not found.</p>;
  }

  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
        }}
      />

      {/* Content */}
      <Navbar />
      <div className="relative z-10 min-h-screen flex justify-center items-center bg-transparent p-4">
        
        
          <div className="flex flex-col md:flex-row md:gap-8 w-full max-w-6xl p-4 md:p-6 bg-white shadow-2xl rounded-3xl border-t-8 border-black/10">
            {/* Left section */}
            <div className="w-full md:w-1/3 flex justify-center items-center p-4 md:p-6">
              <div className="w-full">
                <Card image={item.image} />
              </div>
            </div>

            {/* Right section */}
            <div className="w-full md:flex-1 flex items-center p-4 md:p-6">
              {type === "movie" && (
                <div className="max-w-md w-full space-y-4 text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Director:</strong> {item.director}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Cast:</strong> {item.cast}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Release Date:</strong> {item.date}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <Button
                    text="Book Tickets"
                    onClick={() =>
                      navigate(`/book/${type.toLowerCase()}/${id}`)
                    }
                  />
                </div>
              )}

              {type === "event" && (
                <div className="max-w-md w-full space-y-4 text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Date:</strong> {item.date}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Time:</strong> {item.time}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Location:</strong> {item.location}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>Host:</strong> {item.host}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <Button
                    text="Book Tickets"
                    onClick={() =>
                      navigate(`/book/${type.toLowerCase()}/${id}`)
                    }
                  />
                </div>
              )}
            </div>
          </div>
          
        
      </div>
    </div>
  );
};

export default EventDetails;

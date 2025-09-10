import { useParams, useNavigate } from "react-router-dom";
import { useEventContext } from "../context/EventContext";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useMemo, useState } from "react";
import AnimatedContent from "../components/AnimatedContent";

const Bookingpage = () => {
  const { type, id } = useParams();
  const { movies, events } = useEventContext();
  const navigate = useNavigate();

  let item;
  if (type === "movie") {
    item = movies.find((m) => String(m.id) === id);
  } else if (type === "event") {
    item = events.find((e) => String(e.id) === id);
  }

  // states
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seat, setSeat] = useState(null);
  const [showModal, setShowModal] = useState(false);

  if (!item)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );

  const handleConfirm = () => {
    if (type === "movie" && (!date || !time || !seat)) {
      alert("Please select date, time and seat.");
      return;
    }
    if (type === "event" && !item.date) {
      alert("Event date missing!");
      return;
    }
    setShowModal(true);
  };

  const seats = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => `A${i + 1}`);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 pb-24">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">{item.title} </h1>

        {type === "movie" && (
          <p className="text-xl font-bold mb-4">Release Date: {item.date} </p>
        )}

        {/* MOVIEshow selectable date */}
        {type === "movie" && (
          <div className="mb-4">
            <label className="block font-medium">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-black/10 rounded px-3 py-2 mt-1 w-full"
            />
          </div>
        )}

        {/* EVENT  show fixed date& time */}
        {type === "event" && (
          <>
            <div className="mb-4">
              <label className="block font-medium">Event Date</label>
              <p className="mt-1 px-3 py-2 border border-black/10 rounded bg-gray-100">
                {item.date}
              </p>
            </div>
            <div className="mb-4">
              <label className="block font-medium">Event Time</label>
              <p className="mt-1 px-3 py-2 border border-black/10 rounded bg-gray-100">
                {item.time}
              </p>
            </div>
          </>
        )}

        {/* Movie options */}
        {type === "movie" && (
          <>
            {/* Theatre & Time */}
            <div className="mb-4">
              <label className="block font-medium">Theatre</label>
              <p className="mb-2">PVR Cinemas</p>
              <div className="flex gap-2 flex-wrap">
                {["10:00 AM", "1:30 PM", "6:00 PM", "9:30 PM"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`px-4 py-2 rounded ${
                      time === t ? "bg-black text-white" : "bg-gray-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Seats */}
            <div className="mb-4">
              <label className="block font-medium">Select Seat</label>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 mt-2">
                {seats.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeat(s)}
                    className={`px-3 py-2 rounded-4xl hover hover:bg-black/10 ${
                      seat === s ? "bg-emerald-400 text-white" : "bg-gray-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/*  button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex justify-center">
          <Button text="Pay & Confirm" onClick={handleConfirm} />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50">
            <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center border-t-8 border-green-500">
              
              <h2 className="text-xl font-bold mb-4">Booking Confirmed </h2>
              <img
                className="mx-auto mb-4"
                src="/icons/ticket.gif"
                alt="confirmed"
              />
              <p className="mb-2">
                <strong>{item.title}</strong>
              </p>
              <p className="mb-1">
                Date: {type === "event" ? item.date : date}
              </p>
              <p className="mb-1">
                Time: {type === "event" ? item.time : time}
              </p>
              {type === "movie" && <p className="mb-1">Seat: {seat}</p>}
              {type === "event" && <p className="mb-1">Seat: N/A</p>}
              <div className="mt-4 flex justify-center gap-3">
                <Button text="Go Home" onClick={() => navigate("/")} />
                <Button text="Close" onClick={() => setShowModal(false)} />
              </div>
            </div>
            </AnimatedContent>
            
          </div>
        </>
      )}
    </>
  );
};

export default Bookingpage;

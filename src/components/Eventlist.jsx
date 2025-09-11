
import Eventcard from "./Eventcard";
import { useEventContext } from "../context/EventContext";
import LoaderMain from "./LoaderMain";

const Eventlist = () => {
  const { movies, events, loading } = useEventContext();

  return (
    <div className="p-4 sm:p-6 max-w-screen-xl mx-auto">
      {/* Movies Section */}
      <h2 className="text-2xl sm:text-3xl font-medium font-body mt-5 mb-4 border-b border-black/10">
        Movies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-2 sm:px-0">
        {loading
          ? Array.from({ length:5 }).map((_, i) => <LoaderMain key={i} />) 
          : movies.map((movie) => (
              <Eventcard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                type={movie.type}
              />
            ))}
      </div>

      {/* Events Section */}
      <h2 className="text-2xl sm:text-3xl font-medium font-body mt-10 mb-4 border-b border-black/10">
        Events
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-2 sm:px-0">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => <LoaderMain key={i} />)
          : events.map((event) => (
              <Eventcard
                key={event.id}
                id={event.id}
                title={event.title}
                image={event.image}
                type={event.type}
              />
            ))}
      </div>
    </div>
  );
};

export default Eventlist;

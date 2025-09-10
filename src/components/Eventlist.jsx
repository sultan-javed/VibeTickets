import Slider from "react-slick";
import Loader from "./Loader";
import Eventcard from "./Eventcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEventContext } from "../context/EventContext";

const Eventlist = () => {
  const { movies, events, loading } = useEventContext(); //  Global data

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } }, // large screen
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // tablet
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // small tablet
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // mobile
    ],
  };

  return (
    <div className="p-4 sm:p-6 max-w-screen-xl mx-auto">
      {/* Movies Section */}
      <h2 className="text-2xl sm:text-3xl font-medium font-body mt-5 mb-4 border-b border-black/10">
        Movies
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-40 sm:h-screen">
          <Loader />
        </div>
      ) : (
        // <Slider {...settings}>
        //   {movies.map((movie) => (
        //     <Eventcard
        //       key={movie.id}
        //       id={movie.id}
        //       title={movie.title}
        //       image={movie.image}
        //       type={movie.type}
        //     />
        //   ))}
        // </Slider>
        <Slider {...settings} className="px-2 sm:px-4">
          {movies.map((movie) => (
            <Eventcard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              type={movie.type}
            />
          ))}
        </Slider>
      )}

      {/* Events Section */}
      <h2 className="text-2xl sm:text-3xl font-medium font-body mt-10 mb-4 border-b border-black/10">
        Events
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-40 sm:h-screen">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap justify-start gap-4 sm:gap-6 px-2 sm:px-0">
          {events.map((event) => (
            <Eventcard
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
              type={event.type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Eventlist;

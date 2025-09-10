import { Link } from "react-router-dom";

const Eventcard = ({ id, title, image, type }) => {
  return (
    <Link
      to={`/${type.toLowerCase()}/${id}`}
      className="!flex-shrink-0 w-[140px] sm:w-[180px] md:w-[200px] px-2 sm:px-3"
    >
      <div className="flex flex-col items-start cursor-pointer select-none">
        {/* Card with Image */}
        <div
          className="
            w-[140px] h-[240px]
            sm:w-[180px] sm:h-[300px]
            md:w-[200px] md:h-[340px]
            rounded-[12px]
            flex items-center justify-center
            transition-transform duration-500
            hover:scale-105
            active:scale-95 active:rotate-[3deg]
            relative overflow-hidden
          "
        >
          {/* Image */}
          <img  
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Title */}
        <p className="mt-1 text-xs sm:text-sm md:text-lg font-medium text-black truncate">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Eventcard;

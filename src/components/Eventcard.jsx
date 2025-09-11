import { Link } from "react-router-dom";

const Eventcard = ({ id, title, image, type }) => {
  return (
    <Link to={`/${type.toLowerCase()}/${id}`} className="w-full">
      <div className="flex flex-col items-start cursor-pointer select-none">
        <div
          className="
            w-full aspect-[3/5]   
            rounded-[13px]
            flex items-center justify-center
            transition-transform duration-500
            hover:scale-95
            active:scale-95 active:rotate-[3deg]
            relative overflow-hidden
          "
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black truncate">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Eventcard;

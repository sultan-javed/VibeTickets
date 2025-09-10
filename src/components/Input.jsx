import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../context/EventContext";

const Input = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { movies, events } = useEventContext();
  

  // Combine movies and events
  const allItems = [...movies, ...events];

  // Filter items by query
  const filtered = query
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (item) => {
    setQuery(""); 
    navigate(`/${item.type.toLowerCase()}/${item.id}`);
  };

  return (
    <div className="relative w-full sm:w-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="relative w-full sm:w-80 ring-0 outline-none text-neutral-900 placeholder-gray-600 
          border border-black/10 text-sm rounded-2xl p-2.5"
        placeholder="Search for movies or events..."
      />

      {/* Dropdown */}
      {query && (
        <div className="absolute mt-1 w-full sm:w-80 bg-white border border-black/10 rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                onClick={() => handleSelect(item)}
                className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between"
              >
                <span>{item.title}</span>
                <span className="text-xs text-gray-500">{item.type}</span>
              </div>
            ))
          ) : (
            <p className="p-2 text-sm text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;

import React from "react";
import { Link } from "react-router-dom";

function TitleCard({ poster_path, id, title, media_type, profile_path }) {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path || profile_path}`
    : "https://i.pinimg.com/originals/c8/50/ff/c850ff543a0485c5f53aacb4cf024dca.png";

  return (
    <div className="relative z-0 shadow-lg flex flex-col rounded-md">
      <div>
        <Link to={`/details/${media_type}/${id}`}>
          <img
            src={poster}
            className="object-cover rounded-md"
            alt={`${title} poster`}
          />
        </Link>
      </div>
      <div className="h-20 p-3 flex flex-row items-center">
        <div className="w-1/2 flex justify-center">
          <i class="far fa-heart fa-lg"></i>
        </div>
        <div className="w-1/2 flex justify-center">
          <i class="fas fa-check fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;

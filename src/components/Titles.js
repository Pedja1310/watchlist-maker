import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBox from "./SearchBox";
import Loader from "react-loader-spinner";

import TitleCard from "./TitleCard";
import CategoryDropdown from "./CategroyDropdown";
import {
  fetchTitles,
  searchTitles,
  titlesSelector,
} from "../store/entities/titles";
import { useDispatch, useSelector } from "react-redux";

function Titles() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { media_type, category } = useParams();
  const dispatch = useDispatch();
  const { loading, results } = useSelector(titlesSelector);

  useEffect(() => {
    dispatch(fetchTitles({ media_type, category }));
  }, [media_type, category, page, dispatch]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(searchTitles({ searchQuery }));
    }
  }, [searchQuery, dispatch]);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center mb-20">
      <SearchBox setQuery={setSearchQuery} />
      <div className="">
        <CategoryDropdown />
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4 mt-8">
        {loading ? (
          <Loader type="ThreeDots" height="64" width="64" timeout={3000} />
        ) : (
          results
            .filter(
              (title) =>
                title.media_type !== "person" &&
                title.media_type !== "tv" &&
                title.poster_path !== null
            )
            .map((title) => (
              <TitleCard key={title.id} {...title} media_type={media_type} />
            ))
        )}
      </div>
    </div>
  );
}

export default Titles;

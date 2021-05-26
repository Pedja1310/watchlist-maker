import React, { useEffect } from "react";
import NotFound from "./NotFound";
import TitleDetails from "./TitleDetails";
import { useHistory, useParams } from "react-router-dom";
import {
  clearCurrentTitle,
  fetchTitleDetails,
  titleDetailsSelector,
} from "../store/entities/titles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function TitlePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const title = useSelector(titleDetailsSelector);
  const { id, media_type } = useParams();

  useEffect(() => {
    dispatch(fetchTitleDetails({ id, media_type }));
  }, [id, media_type, dispatch]);

  const handleBackButton = () => {
    history.goBack();
  };

  return title.loading ? (
    <Loader type="ThreeDots" height="64" width="64" timeout={3000} />
  ) : (
    <section id="movie-details" className="p-4 pb-20 grid grid-auto-rows">
      <button
        onClick={handleBackButton}
        className="mb-4 flex flex-row items-center w-auto focus:outline-none"
      >
        <img
          src="/images/icons/goback.png"
          alt="Genres Icon"
          width="16"
          className="mr-1"
        />
        Back
      </button>
      {!title.release_date && !title.first_air_date ? (
        <NotFound message={"No details for chosen title!"} />
      ) : (
        <TitleDetails title={title} />
      )}
    </section>
  );
}

export default TitlePage;

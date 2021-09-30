import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { MovieContext } from "../utils/Services/MovieContext";
import "./detail-movie.css";

const DetailMovie = () => {
  const { listMovie, fetchStatus, setFetchStatus, functions } =
    useContext(MovieContext);
  const { fetchDataMovie } = functions;

  let { ID_MOVIE } = useParams();

  useEffect(() => {
    if (fetchStatus) {
      fetchDataMovie();
      setFetchStatus(false);
    }
  }, [fetchDataMovie, fetchStatus, setFetchStatus]);

  return (
    <>
      <div className="movie-detail">
        {/* {console.log(listMovie)} */}
        {listMovie !== null &&
          listMovie
            // .filter((e) => {
            //   return e.id === ID_MOVIE;
            // })
            .map((res) => {
              console.log(res);

              return (
                <div className="data-movie">
                  <div className="image-detail">
                    <h2>Movie Detail - {res.title}</h2>
                    <img src={res.image_url} alt="img-detail" />
                  </div>
                  <div className="desc-detail">
                    <table style={{ border: "1px solid #FFF" }}>
                      <tbody>
                        <td>
                          <tr>Title : {res.title}</tr>
                          <tr>Genre : {res.genre}</tr>
                          <tr>Year : {res.year}</tr>
                          <tr>Rating : {res.rating}</tr>
                          <tr>Description: {res.description}</tr>
                          <tr>Review : {res.review}</tr>
                        </td>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default DetailMovie;

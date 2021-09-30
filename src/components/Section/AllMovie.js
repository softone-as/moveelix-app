import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../utils/Services/MovieContext";
import { Card } from "antd";

const AllMovie = () => {
  const { listMovie, fetchStatus, setFetchStatus, functions } =
    useContext(MovieContext);
  const { fetchDataMovie } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchDataMovie();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div className="all-movie-list">
      <h1>All best movies is here</h1>
      {listMovie !== undefined &&
        listMovie.map((res, index) => {
          return (
            <div className="site-card-border-less-wrapper">
              {console.log(listMovie)}
              <Card
                title={res.title}
                bordered={false}
                style={{ width: 300 }}
                key={index}
              >
                <img src={res.image_url} alt="img-movie" />
                <p>Genre : {res.genre}</p>
                <p>Year : {res.year}</p>
                <p>Rating : {res.rating}</p>
                <p>Review : {res.review}</p>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default AllMovie;

import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../utils/Services/MovieContext";
import { ArrowRightOutlined } from "@ant-design/icons";

const LinkStyle = {
  textDecoration: "none",
  color: "white",
};

const SectionMovie = () => {
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
    <section className="section-movie">
      <div className="title-movie">
        <h1>Best movies in here</h1>
      </div>
      <div className="best-movie">
        <img src="./assets/img/hero-image.jpg" alt="hero-img" />
        <div className="desc">
          <h3>Judulnya</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            molestias deleniti! Quas, dolorum laborum explicabo ipsa labore
            eveniet cupiditate distinctio?
          </p>
          <Link style={LinkStyle} size={"large"} to="/all-movie">
            <Button className="btn-login" type="primary">
              See All Movie <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
      <div className="list-movie">
        {listMovie !== null &&
          listMovie.map((res, index) => {
            return (
              <div className="card-movie" key={index}>
                <div className="card-wrapper">
                  <img
                    className="card-img"
                    src={`${res.image_url}`}
                    alt="hero-img"
                  />
                  <div className="overlay-text-movie">
                    <h2>{res.title}</h2>
                    <Link to={`/detail-movie/${res.id}`}>See detail</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SectionMovie;

import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GamesContext } from "../../utils/Services/GamesContext";
import { ArrowRightOutlined } from "@ant-design/icons";

const LinkStyle = {
  textDecoration: "none",
  color: "white",
};

const SectionGames = () => {
  const { listGames, fetchStatus, setFetchStatus, functions } =
    useContext(GamesContext);
  const { fetchDataGames } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchDataGames();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <section className="section-games">
      <div className="list-games">
        {listGames !== null &&
          listGames.map((res, index) => {
            return (
              <div className="card-games" key={index}>
                <div className="card-wrapper">
                  <img
                    className="card-img"
                    src={`${res.image_url}`}
                    alt="hero-img"
                  />
                  <div className="overlay-text-games">
                    <h2>{res.name}</h2>
                    <Link to={`/detail-game/${res.id}`}>See detail</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="title-games">
        <h1>Best games in here</h1>
      </div>
      <div className="best-games">
        <img src="./assets/img/hero-image.jpg" alt="hero-img" />
        <div className="desc">
          <h3>Judulnya</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            molestias deleniti! Quas, dolorum laborum explicabo ipsa labore
            eveniet cupiditate distinctio?
          </p>
          <Link style={LinkStyle} size={"large"} to="/all-games">
            <Button className="btn-login" type="primary">
              See All Game <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionGames;

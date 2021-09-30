import React, { useContext, useEffect } from "react";
import { GamesContext } from "../../utils/Services/GamesContext";
import { Card } from "antd";

const AllGames = () => {
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
    <div className="all-game-list">
      <h1>All best movies is here</h1>
      {listGames !== undefined &&
        listGames.map((res, index) => {
          return (
            <div className="site-card-border-less-wrapper">
              <Card
                title={res.name}
                bordered={false}
                style={{ width: 300 }}
                key={index}
              >
                <img src={res.image_url} alt="img-movie" />
                <p>Genre : {res.genre}</p>
                <p>Release : {res.release}</p>
                <p>Platform : {res.platform}</p>
                <p>Multiplayer : {res.multiplayer}</p>
                <p>Singleplayer : {res.singlePlayer}</p>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default AllGames;

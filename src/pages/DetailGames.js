import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { GamesContext } from "../utils/Services/GamesContext";
import "./detail-game.css";

const DetailGames = () => {
  const { listGames, fetchStatus, setFetchStatus, functions } =
    useContext(GamesContext);
  const { getDataGame } = functions;
  let history = useHistory();
  let { ID_GAMES } = useParams();

  useEffect(() => {
    if (fetchStatus) {
      getDataGame(ID_GAMES);
      setFetchStatus(false);
    }
  }, [getDataGame, fetchStatus, setFetchStatus]);

  return (
    <div className="game-detail">
      {listGames !== null &&
        listGames.map((res) => {
          return (
            <div className="data-game">
              <div className="image-detail">
                <h2>Games Detail - {res.name}</h2>
                <img src={res.image_url} alt="img-detail" />
              </div>
              <div className="desc-detail">
                <table style={{ borderCollapse: "collapse" }}>
                  <tbody>
                    <td>
                      <tr>Name</tr>
                      <tr>Genre</tr>
                      <tr>Release</tr>
                      <tr>Platform</tr>
                      <tr>Single Player</tr>
                      <tr>Multi Player</tr>
                    </td>
                    <td>
                      <tr>: {res.name}</tr>
                      <tr>: {res.genre}</tr>
                      <tr>: {res.release}</tr>
                      <tr>: {res.platform}</tr>
                      <tr>: {res.singlePlayer}</tr>
                      <tr>: {res.multiplayer}</tr>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DetailGames;

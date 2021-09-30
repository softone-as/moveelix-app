import { message } from "antd";
import axios from "axios";
import React, { useState, createContext } from "react";
import { useHistory } from "react-router";
import Cookies from "js-cookie";

export const GamesContext = createContext();

export const GamesProvider = (props) => {
  const tokenCookies = Cookies.get("token");
  const history = useHistory();
  const [listGames, setListGames] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [inputData, setInputData] = useState({
    genre: "",
    image_url: "",
    singlePlayer: false, //(true or false) / (1 or 0)
    multiplayer: false, //(true or false) / (1 or 0)
    name: "",
    platform: "",
    release: 2000, // (minimal 2000 dan maksimal 2021)
  });

  const fetchDataGames = async () => {
    let result = await axios.get(
      "https://backendexample.sanbersy.com/api/data-game"
    );
    let fetchResult = result.data;
    setListGames(
      fetchResult.map((res) => {
        return {
          id: res.id,
          genre: res.genre,
          image_url: res.image_url,
          singlePlayer: res.singlePlayer,
          multiplayer: res.multiplayer,
          name: res.name,
          platform: res.platform,
          release: res.release,
        };
      })
    );
  };

  const getDataGame = async (ID_GAMES) => {
    let result = await axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${ID_GAMES}`)
      .then(() => {
        let singleData = listGames.filter((res) => {
          return res.id === ID_GAMES;
        });
        setListGames(singleData);
        console.log(singleData);
        setFetchStatus(true);
      });
  };

  const deleteDataGames = (ID_GAMES) => {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${ID_GAMES}`, {
        headers: { Authorization: "Bearer " + tokenCookies },
      })
      .then(() => {
        setFetchStatus(true);
        message.success("Data berhasil dihapus!");
      });
  };

  const addDataGame = (values) => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-game`,
        {
          genre: values.genre,
          image_url: values.image_url,
          singlePlayer: values.singlePlayer,
          multiplayer: values.multiplayer,
          name: values.name,
          platform: values.platform,
          release: values.release,
        },
        { headers: { Authorization: "Bearer " + tokenCookies } }
      )
      .then((res) => {
        setFetchStatus(true);
        message.success("New Game successfully added!");
        history.push("/games-list");
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  const editDataGame = (ID_GAMES) => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${ID_GAMES}`)
      .then((res) => {
        let data = res.data;
        setInputData({
          genre: data.genre,
          image_url: data.image_url,
          singlePlayer: data.singlePlayer,
          multiplayer: data.multiplayer,
          name: data.name,
          platform: data.platform,
          release: data.release,
        });
        setCurrentId(data.id);
      });
  };

  const functions = {
    fetchDataGames,
    deleteDataGames,
    addDataGame,
    editDataGame,
    getDataGame,
  };

  return (
    <GamesContext.Provider
      value={{
        listGames,
        setListGames,
        fetchStatus,
        setFetchStatus,
        currentId,
        setCurrentId,
        inputData,
        setInputData,
        history,
        functions,
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

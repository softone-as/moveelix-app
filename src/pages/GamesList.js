import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table, Button, Input } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { GamesContext } from "../utils/Services/GamesContext";

const GamesList = () => {
  const { listGames, fetchStatus, setFetchStatus, functions } =
    useContext(GamesContext);
  const { fetchDataGames, deleteDataGames, editDataGame } = functions;
  let history = useHistory();

  useEffect(() => {
    if (fetchStatus) {
      fetchDataGames();
      setFetchStatus(false);
    }
  }, [fetchDataGames, fetchStatus, setFetchStatus]);

  const handleDelete = (event) => {
    let idGames = parseInt(event.currentTarget.value);
    deleteDataGames(idGames);
  };

  const handleEdit = (event) => {
    let idGames = parseInt(event.currentTarget.value);
    history.push(`/edit-game/${idGames}`);
    editDataGame(idGames);
  };

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      index: "name",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      index: "genre",
    },
    {
      title: "Release",
      dataIndex: "release",
      index: "release",
    },
    {
      title: "Platform",
      dataIndex: "platform",
      index: "platform",
    },
    {
      title: "Single Player",
      dataIndex: "singlePlayer",
      index: "singlePlayer",
    },
    {
      title: "Multi Player",
      dataIndex: "multiplayer",
      index: "multiplayer",
    },
    {
      title: "Action",
      key: "action",
      render: (res, index) => (
        <div
          key={index}
          className="action"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Button
            icon={<EditFilled style={{ color: "#fff" }} />}
            onClick={handleEdit}
            value={res.id}
            style={{ backgroundColor: "yellow", border: "1px solid green" }}
          />
          <Button
            icon={<DeleteFilled style={{ color: "#fff" }} />}
            onClick={handleDelete}
            value={res.id}
            style={{
              backgroundColor: "red",
            }}
          />
        </div>
      ),
    },
  ];

  const dataGames = listGames;

  return (
    <div className="game-table" style={{ marginTop: "8rem" }}>
      <h1>Games List</h1>
      <div
        className="game-list-action"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/create-game">
          <Button type="primary" style={{ marginBottom: "1rem" }}>
            Add New Game
          </Button>
        </Link>
        <div
          className="input-search"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Input />
          <Link to="/search-game">
            <Button type="primary">Search</Button>
          </Link>
        </div>
      </div>
      <Table dataSource={dataGames} columns={column} />
    </div>
  );
};

export default GamesList;

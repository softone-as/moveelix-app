import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MovieContext } from "../utils/Services/MovieContext";
import { Table, Button, Input } from "antd";
import { useParams } from "react-router";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import axios from "axios";

const MovieList = () => {
  const { valueOfSearch } = useParams();
  const {
    listMovie,
    fetchStatus,
    setFetchStatus,
    setSearchStatus,
    searchStatus,
    functions,
  } = useContext(MovieContext);
  const { fetchDataMovie, deleteDataMovie, editDataMovie } = functions;
  let history = useHistory();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (fetchStatus) {
      fetchDataMovie();
      setFetchStatus(false);
    }
  }, [fetchDataMovie, fetchStatus, setFetchStatus]);

  useEffect(() => {
    if (searchStatus) {
      fetchSearch();
      setSearchStatus(false);
    }
  }, [search, searchStatus, setSearchStatus]);

  const fetchSearch = async () => {
    let result = await axios.get(
      `http://backendexample.sanbercloud.com/api/data-movie`
    );
    let resultData = result.data;

    let filterData = resultData.filter((e) => {
      return Object.values(e)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setSearchData(
      filterData.map((e) => {
        let {
          id,
          description,
          duration,
          genre,
          image_url,
          rating,
          review,
          title,
          year,
        } = e;
        return {
          id,
          description,
          duration,
          genre,
          image_url,
          rating,
          review,
          title,
          year,
        };
      })
    );
  };

  const handleDelete = (event) => {
    console.log(event);
    let idMovie = parseInt(event.currentTarget.value);
    deleteDataMovie(idMovie);
  };

  const handleEdit = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    history.push(`/edit-movie/${idMovie}`);
    editDataMovie(idMovie);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearch();
    setSearchStatus(true);
    setSearch("");
  };

  const column = [
    {
      title: "Title",
      dataIndex: "title",
      index: "title",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      index: "genre",
    },
    {
      title: "Description",
      dataIndex: "description",
      index: "description",
    },
    {
      title: "Year",
      dataIndex: "year",
      index: "year",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      index: "rating",
    },
    {
      title: "Review",
      dataIndex: "review",
      index: "review",
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
            style={{ backgroundColor: "red" }}
          />
        </div>
      ),
    },
  ];

  const dataMovie = listMovie;

  return (
    <div className="movie-table" style={{ marginTop: "8rem" }}>
      <h1>Movie List</h1>
      <div
        className="movie-list-action"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/create-movie">
          <Button type="primary" style={{ marginBottom: "1rem" }}>
            Add New Movie
          </Button>
        </Link>
        <form
          method="POST"
          onSubmit={handleSearch}
          className="input-search"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            onChange={handleChange}
            name={search}
            value={search}
            style={{ color: "#000" }}
          />
          <input
            type="submit"
            value="Search"
            style={{ backgroundColor: "#c4a35a" }}
          />
        </form>
      </div>
      <Table dataSource={dataMovie} columns={column} />

      {searchData !== undefined && (
        <div className="search-data-table" style={{ marginTop: "1rem" }}>
          <h2>Search Result</h2>
          <table>
            <thead>
              <th>Title</th>
              <th>Genre</th>
              <th>Description</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Review</th>
            </thead>
            <tbody>
              {searchData.map((res, index) => {
                return (
                  <tr key={index}>
                    <td>{res.title}</td>
                    <td>{res.genre}</td>
                    <td>{res.description}</td>
                    <td>{res.year}</td>
                    <td>{res.rating}</td>
                    <td>{res.review}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MovieList;

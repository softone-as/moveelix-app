import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, createContext } from "react";
import { useHistory } from "react-router";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const history = useHistory();
  const [listMovie, setListMovie] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [searchStatus, setSearchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [getOneData, setGetOneData] = useState([]);
  const [inputData, setInputData] = useState({
    description: "",
    duration: 0,
    genre: "",
    image_url: "",
    rating: 0, //(minimal 0 dan maksimal 10)
    review: "",
    title: "",
    year: 1980, //(minimal 1980 dan maksimal 2021)
  });

  const tokenCookies = Cookies.get("token");

  const fetchDataMovie = async () => {
    let result = await axios.get(
      "https://backendexample.sanbersy.com/api/data-movie"
    );
    let fetchResult = result.data;
    setListMovie(
      fetchResult.map((res) => {
        return {
          id: res.id,
          description: res.description,
          duration: res.duration,
          genre: res.genre,
          image_url: res.image_url,
          rating: res.rating,
          review: res.review,
          title: res.title,
          year: res.year,
        };
      })
    );
  };

  const getDataMovie = async (ID_MOVIES) => {
    let result = await axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${ID_MOVIES}`)
      .then(() => {
        let singleData = listMovie.filter((res) => {
          return res.id === ID_MOVIES;
        });
        console.log(singleData);
        setGetOneData(singleData);
        setFetchStatus(true);
      });
  };

  const deleteDataMovie = (ID_MOVIES) => {
    axios
      .delete(
        `https://backendexample.sanbersy.com/api/data-movie/${ID_MOVIES}`,
        { headers: { Authorization: "Bearer " + tokenCookies } }
      )
      .then(() => {
        setFetchStatus(true);
        message.success("Data berhasil dihapus!");
      });
  };

  const addDataMovie = (values) => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-movie`,
        {
          description: values.description,
          duration: values.duration,
          genre: values.genre,
          image_url: values.image_url,
          rating: values.rating,
          review: values.review,
          title: values.title,
          year: values.year,
        },
        { headers: { Authorization: "Bearer " + tokenCookies } }
      )
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
        message.success("New Movie successfully added!");
        history.push("/movie-list");
      })
      .catch((e) => {
        console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };

  const editDataMovie = (ID_MOVIES) => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${ID_MOVIES}`)
      .then((res) => {
        let data = res.data;
        setInputData({
          description: data.description,
          duration: data.duration,
          genre: data.genre,
          image_url: data.image_url,
          rating: data.rating,
          review: data.review,
          title: data.title,
          year: data.year,
        });
        setCurrentId(data.id);
      });
  };

  const updateDataMovie = (value) => {
    axios
      .put(`https://backendexample.sanbersy.com/api/data-movie/${value.id}`, {
        description: value.description,
        duration: value.duration,
        genre: value.genre,
        image_url: value.image_url,
        rating: value.rating,
        review: value.review,
        title: value.title,
        year: value.year,
      })
      .then((e) => {
        setFetchStatus(true);
        message.success("New Movie successfully added!");
        history.push("/movie-list");
      });
  };

  const functions = {
    fetchDataMovie,
    deleteDataMovie,
    editDataMovie,
    updateDataMovie,
    getDataMovie,
    addDataMovie,
  };

  return (
    <MovieContext.Provider
      value={{
        listMovie,
        setListMovie,
        fetchStatus,
        setFetchStatus,
        currentId,
        setCurrentId,
        inputData,
        setInputData,
        history,
        searchStatus,
        setSearchStatus,
        functions,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../utils/Services/MovieContext";

const SearchPage = () => {
  const { searchStatus, setSearchStatus } = useContext(MovieContext);
  const { valueOfSearch } = useParams();
  const [inputSearch, setInputSearch] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      let result = await axios.get(
        `https://backendexample.sanbersy.com/api/data-movie`
      );
      let resultData = result.data;

      let filterData = resultData.filter((e) => {
        return Object.values(e)
          .join(" ")
          .toLowerCase()
          .includes(valueOfSearch.toLowerCase());
      });

      setInputSearch([...filterData]);
    };

    if (searchStatus) {
      fetchSearch();
      setSearchStatus(false);
    }
  }, [searchStatus, setSearchStatus]);

  return <div></div>;
};

export default SearchPage;

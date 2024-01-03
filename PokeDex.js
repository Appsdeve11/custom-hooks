import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [responseData, setResponseData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(baseUrl + url);
      const data = response.data;
      setResponseData((prevData) => [...prevData, data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData("");
  }, []);

  return [responseData, fetchData];
}

export default useAxios;
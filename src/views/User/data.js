/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const DataUser = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await fetch("users/")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
      })
      .then(
        (result) => {
          if (result.status_code == 200) {
            setData(result.result);
          }
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }, []);

  return [data, setData];
};

export default DataUser;

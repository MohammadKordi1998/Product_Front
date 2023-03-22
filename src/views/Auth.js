/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Cookies from "universal-cookie";
import React, { useState } from "react";

const Auth = () => {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (cookies.get("token")) {
      fetch("users/auth/", {
        method: "GET",
        // body: JSON.stringify({}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Token " + cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code) {
            if (data.status_code == "200") {
              setIsAuth(true);
            } else {
              setIsAuth(false);
            }
          }
        });
    }
  }, []);

  return [isAuth, setIsAuth];
};

export default Auth;

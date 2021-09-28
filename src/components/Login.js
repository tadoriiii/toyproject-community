import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = async ({ input }) => {
  //   const [token, setToken] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //  setLoading(true);

  //   const history = useHistory();
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: input.id,
        password: input.password,
      }),
    });
    if (response.status === 200) {
      const token = response.token;
      localStorage.setItem("accessToken", token);
      console.log("success");

      //    history.replace("/main");
    } else {
      console.log("failed");

      throw response;
    }
  } catch (e) {
    alert(e);
    //setError(e);
  }
  console.log("pending");

  // setLoading(false);
};

//     useEffect(() => {
//       fetchLogin();
//     }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>error</div>;

export default Login;

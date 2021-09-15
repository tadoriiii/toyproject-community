import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const LoginPicture = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPictures = async () => {
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:4000/posts");
      if (response.status === 200) {
        setPictures(response.data);
      } else {
        throw response;
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPictures();
  }, []);

  if (loading) return <div>로딩중!</div>;
  if (error) return <div>에러가 발생</div>;

  return (
    <>
      <div>
        {pictures.map((picture) => (
          <img src={picture.image} alt="Login-img" />
        ))}
      </div>
    </>
  );
};

export default LoginPicture;

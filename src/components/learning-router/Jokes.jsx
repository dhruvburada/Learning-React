import React, { useEffect, useState } from "react";
import axios from "axios";
const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("https://v2.jokeapi.dev/joke/Any?type=single")
          .then((response) => {
            setJoke(response.data.joke);
          });

        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div> Something Went Wrong</div>;
  if (loading) return <div>Loading Joke</div>;

  return (
    <>
      <h1>Joke:</h1>
      <div>{joke}</div>
    </>
  );
};

export default Jokes;

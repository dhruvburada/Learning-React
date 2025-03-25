import React, { useEffect, useState } from "react";

export const Jokes = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => {return res.json()})
      .then((data) => {setJoke(`${data["setup"]}, ${data["delivery"]}`)})
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Jokes:</h1>
      <p>{joke}</p>
    </div>
  );
};

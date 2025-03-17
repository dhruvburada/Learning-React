import { useLoaderData } from "react-router-dom";

const Github = () => {
  let data = useLoaderData();
 
  

  return (
    <>
    <h1>Followers: {data["followers"]}</h1>
    <img src={data["avatar_url"]} alt="Avtar"/>
    </>
  );
  
};

export default Github;

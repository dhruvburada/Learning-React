import React, { useState, useEffect } from "react";

const Github = () => {
  let [followers, setFollowers] = useState(0);
  useEffect(() => {
    fetch("https://api.github.com/users/dhruvburada")
      .then(function (response) {
        console.log(response);
        return response.json();
      }).then((data)=>setFollowers(data["followers"]));
  }, []);

  return <div>Github : {followers}</div>;
};

export default Github;



export const githubInfoLoader = () => {
    return fetch("https://api.github.com/users/dhruvburada")
      .then(function (response) {
        console.log(response);
        return response.json();
      });

}


function fetchDataFromAPI() {
  const apiUrl = "https://dog.ceo/api/breeds/image/random";

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response wasn't ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject("Fetch failed with error: " + error);
      });
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log("Data fetched from API: ", data);
  })
  .catch((error) => {
    console.error(error);
  });

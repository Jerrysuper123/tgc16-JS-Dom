axios.get("data.json").then(function (response) {
  //convert string to json object directly, we do not need to convert the string into object anymore
  let movie = response.data;
  console.log(movie);

  document.querySelector("#title").innerHTML = movie.title;
  document.querySelector("#year_released").innerHTML = movie.year_released;
});

let btn = document.querySelector("#loadBtn");

btn.addEventListener("click", async function () {
  // axios.get("data.json").then(function (response) {
  //   //convert string to json object directly, we do not need to convert the string into object anymore
  //   let movie = response.data;
  //   // console.log(movie);
  //   document.querySelector("#title").innerHTML = movie.title;
  //   document.querySelector("#year_released").innerHTML = movie.year_released;
  // });
  // aother way of writing, more modern way of writing

  //put a mark at line 14, wait for this to finish, do not execute lines below
  //then go and go other things
  let response = await axios.get("data.json");
  let movie = response.data;
  document.querySelector("#title").innerHTML = movie.title;
  document.querySelector("#year_released").innerHTML = movie.year_released;
});

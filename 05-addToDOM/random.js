let btn = document.querySelector("#btnAdd");
// alert("hello");

let names = ["jeerry", "tom", "asd", "asdaasda", "asdasd"];

btn.addEventListener("click", function () {
  let number = Math.floor(Math.random() * 100 + 1);

  let numberList = document.querySelector("#number");
  numberList.innerHTML += `<li>${number}</li>`;
  console.log(numberList.innerHTML);
});

document
  .querySelector("#btnAddName")
  // math random produce 0-9 number
  .addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * names.length);
    let randomName = names[randomIndex];

    //easy to add event listener to the element
    let nameElement = document.createElement("li");
    nameElement.innerHTML = randomName;
    console.log(nameElement);

    let parent = document.querySelector("#number");
    parent.appendChild(nameElement);
  });

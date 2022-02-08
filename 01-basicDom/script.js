// this is browser based js only (spagetti js)
// no modules 
// no files i/o (cannot write in computer due to security)
// no yarn and npm (no node)

// alert("hello world");

//list down all properties and function of an object
//document is the predefined document
// console.dir(document); //dir print out all properties and functions
// let h = document.getElementById('title');
// console.dir(h);
// h.innerHTML = "my dont do list";

// let li = document.getElementsByTagName('li');
// console.log(li);

//best to use querySelector, same style as css, easier to use
//query selector only find the first match
let header = document.querySelector('#title');
let firstToDo = document.querySelector('.important');
firstToDo.style.backgroundColor = "red";
firstToDo.style.fontSize = "32px";

//if you want to select all,\ use below
let allToDos = document.querySelectorAll('li');


//select the button
let btn = document.querySelector('#btn');
//below is a callbk function, first defined, when click event is detected, we run callbk function
btn.addEventListener('click', function(){
    let title = document.querySelector("#title");
    title.innerHTML = "good bye world";
    title.style.color = 'red';
})

function helloWorld(){
    let title = document.querySelector("#title");
    title.innerHTML = "say hello world";
    title.style.color = 'red';
}

document.querySelector('#hello').addEventListener('click', helloWorld)



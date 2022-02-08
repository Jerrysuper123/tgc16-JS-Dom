// alert('hello')

//try some event listener
//event-driven paradgmn
//EIPO
//event=> input =>process =>output

let box = document.querySelector('#box');
let count = 0;

box.addEventListener('mouseenter', function(){
    //box is not defined in local scope, so it looks for global scope
    box.style.backgroundColor = 'blue';
    count++;
    document.querySelector('#output').innerText = count;
})

box.addEventListener('mouseleave', function(){
    //box is not defined in local scope, so it looks for global scope
    box.style.backgroundColor = 'white';
})
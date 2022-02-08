// alert('hello')

//try some event listener
//event-driven paradgmn
//EIPO
//event=> input =>process =>output

let box = document.querySelector('#box');

box.addEventListener('mouseenter', function(){
    //box is not defined in local scope, so it looks for global scope
    box.style.backgroundColor = 'blue';
})

box.addEventListener('mouseleave', function(){
    //box is not defined in local scope, so it looks for global scope
    box.style.backgroundColor = 'white';
})
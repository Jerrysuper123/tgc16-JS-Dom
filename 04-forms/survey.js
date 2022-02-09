// alert('hello')

let btn = document.querySelector("#btn");
btn.addEventListener('click', function(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector("#email").value;
    //1) css method to retrieve rating
    // let rating = document.querySelector('.rating:checked').value;

    //2) is to use linear search through the node list of radio buttons
    let rating = null; 
    let rb = document.querySelectorAll('.rating');
    for(let eachRating of rb){
        if(eachRating.checked === true){
            rating = eachRating.value;
            break;
        }
    }

    //select all checkboxes
    // let selectedCheckboxes = document.querySelectorAll('.hear-about:checked');
    // let hearAbout = [];
    // for(let checkbox of selectedCheckboxes){
    //     hearAbout.push(checkbox.value);
    // }

    //use linear search to search find all selected checkboxes
    let allCheckboxes = document.getElementsByClassName('hear-about');
    let hearAbout = [];

    for(let checkbox of allCheckboxes){
        if(checkbox.checked == true){
            hearAbout.push(checkbox.value);
        }
    }

    console.log(name, email, rating, hearAbout)
    
})
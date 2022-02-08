// alert('e')

// when queryselectorAll will return an array of elements
//so we need to loop thru this array
let r = document.querySelectorAll('.recommended');
// r.style.backgroundColor = 'red'; //this will not work because we cannot style a node list
// console.dir(r); 
// this will return a node list

for(let eachLI of r){
    eachLI.style.backgroundColor = 'green';
}

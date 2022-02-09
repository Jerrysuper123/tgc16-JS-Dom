
document.querySelector("button").addEventListener('click', function(){
    let result = document.querySelector('.fruitSelector:checked').value;
    document.querySelector('.result').innerText = result;
})
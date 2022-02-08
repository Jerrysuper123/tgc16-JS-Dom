// alert('heelo')

document.querySelector("#btnCalculate")
        .addEventListener("click", function(){
            // access inputElement.value to see its value
            let weightInput = document.querySelector('#weight');
            // console.log(weightInput.value);
            let weight = parseFloat(weightInput.value);
            console.log(weight);

            let heightInput = document.querySelector('#height');
            let height = parseFloat(heightInput.value);
            let r = document.querySelector('.measurement:checked');

            // we could also use below
            // let r = document.querySelector('[name="measurement"]:checked');
            let UOM = r.value;
            console.log(UOM);

            let bmi = 0;
            if(UOM==='metric'){
                bmi = weight/(height*height);
            } else{
                bmi = weight/(height*height)*703;
            }
            //toFixed will return a string of 2 decimal place
            document.querySelector('#result').innerText = 'you bmi is'+ bmi.toFixed(2);
        })
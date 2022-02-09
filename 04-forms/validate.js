
document.querySelector('#btn')
        .addEventListener('click',function(){
            //define flags
            //assume there is no errors at start
            let nameTooShort = false;
            let nameNotProvided = false;
            let emailNotValid = false;

            let name = document.querySelector('#name').value;
            if(!name){
                nameNotProvided=true;
            } else if(name.length<3){
                nameTooShort = true;
            }

            let email = document.querySelector('#email').value;
            //demorgan theorem
            if(!email.includes('.') || !email.includes('@')){
                emailNotValid = true;
            }

            if(nameNotProvided || nameTooShort || emailNotValid){
                //get error div
                let errorResult = document.querySelector('#errors');
                errorResult.innerHTML = '';
                errorResult.style.display = "block";

                if(nameNotProvided){
                    errorResult.innerHTML += `<p> not name <p>`
                }

                if(nameTooShort){
                    errorResult.innerHTML += `<p> too short <p>`
                }

                if(emailNotValid){
                    errorResult.innerHTML += `<p> email invalid <p>`
                }

                //use innerHTML += to append the errors
            }

            console.log("name not provided =", nameNotProvided);
            console.log("name too short =", nameTooShort);
            console.log("email not valid =", emailNotValid);
        })
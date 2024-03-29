const form =document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 =document.getElementById('confirmPassword');
const address = document.getElementById('address');

function  showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success';
}


function ValidateEmail (str) {
    const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    return emailRegex.test(str);
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}

function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is Required.`)
        }else{
            showSuccess(input);
        }
    });
}

function checkLenth(input,min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
}
function checkEmail(){
    console.log(email.value);
    if(email.value===''){
        showError(email, "email is required")
    }else if(!ValidateEmail(email.value.trim())){
        showError(email, "Please enter valid email id")
    }
    else{
        showSuccess(email);
    }
    

}

function checkPasswordMatch(password,password2){
    if(password.value!=='' && password.value===password2.value){
        showSuccess(password2);
    }else{
       
        showError(password2,"passwords are not matching");
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username,email,password,confirmPassword,address]);
    checkEmail(email);
    checkLenth(username, 3, 15);
    checkLenth(password,3,25);
    checkLenth(password2,3,25);
    checkPasswordMatch(password,password2);
})


function resetForm(){
        [username,email,password,confirmPassword, email,address].forEach(input => {
        const formControl = input.parentElement;
        formControl.className ='form-control';
    });
    document.getElementById("reset").reset();
}

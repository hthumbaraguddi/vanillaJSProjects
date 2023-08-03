const form =document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 =document.getElementById('confirmPassword');

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
    return typeof str==='string' && /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(str);
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
    if(password.value===password2.value){
        showSuccess(password2);
    }else{
       
        showError(password2,"passwords are not matching");
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(username.value);

    checkRequired([username,email,password,confirmPassword]);

    checkLenth(username, 3, 15);
    checkLenth(password,3,25);
    checkLenth(password2,3,25);
    checkPasswordMatch(password,password2);

})

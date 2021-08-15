document.getElementById('submit-btn').addEventListener('click', function(e){
    e.preventDefault();
    let emailField = document.getElementById('exampleInputEmail1');
    let pwdField = document.getElementById('exampleInputPassword1');
    let emailValue = emailField.value;
    let pwdValue = pwdField.value;

    if(emailValue == 'hkbanking@hk.com' && pwdValue == 'hk1234'){
        window.location.href = 'banking.html';
    }
    if(emailValue != 'hkbanking@hk.com' || pwdValue != 'hk1234'){
        alert('Please input valid email and password');
    }
});

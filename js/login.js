document.getElementById('login-button').addEventListener('click', function () {
    // get email
    const emailField = document.getElementById('input-email');
    const emailValue = emailField.value;
    // get password
    const passwordField = document.getElementById('input-password');
    const passwordValue = passwordField.value;

    if (emailValue == 'aafahad02@gmail.com' && passwordValue == '123456') {
        window.location.href = '../banking.html';
    }

})
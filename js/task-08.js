const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(loginFormEl)

    const emailInput = loginFormEl.elements.email;
    const passwordInput = loginFormEl.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {

        alert('Усі поля повинні бути заповнені');

    } else {

        const userLogin = {
            email: emailInput.value,
            password: passwordInput.value
        }

        console.log(userLogin);

        loginFormEl.reset();
    }


})

function validate() {
    const companyField = document.getElementById('companyInfo');
    const companyCheck = document.getElementById('company');
    const form = document.getElementById('registerForm');

    companyCheck.addEventListener('change', () => {
        if (companyCheck.checked) {
            companyField.style.display = 'block'
        } else {
            companyField.style.display = 'none'
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userNameImput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const rePasswordInput = document.getElementById('confirm-password');
        const companyNumberInput = document.getElementById('companyNumber');

        const validField = document.getElementById('valid');

        const userNamePattern = /^[a-zA-Z0-9]+$/;
        const passwordPattern = /^[\w]+$/;
        const emailePattern = /.*@.*\..*/;
        
        let usernameIsValid = false;
        let passwordIsValid = false;
        let repasswordIsValid = false;
        let emailIsValid = false;
        let companyNumberIsValid = false;

        if (
        userNamePattern.test(userNameImput.value) && 
        userNameImput.value.length >= 3 && 
        userNameImput.value.length <= 20
        ) {
            usernameIsValid = true;
        }

        if (emailePattern.test(emailInput.value)) {
            emailIsValid = true;
        }
        
        if (
        passwordPattern.test(passwordInput.value) && 
        passwordInput.value.length >= 5 && 
        passwordInput.value.length <= 15 && 
        passwordInput.value == rePasswordInput.value
        ) {
            passwordIsValid = true;
            repasswordIsValid = true;
        }

        if (companyCheck.checked){
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumberIsValid = true;
            }   
        }
        else {
            companyNumberIsValid = true;
        }
        if (usernameIsValid && passwordIsValid && repasswordIsValid && emailIsValid && companyNumberIsValid) {
            validField.style.display = 'block'
        }
        if (!usernameIsValid){
            userNameImput.style.borderColor = 'red';
        }
        if (!passwordIsValid){
            passwordInput.style.borderColor = 'red'
        }
        if (!repasswordIsValid){
            rePasswordInput.style.borderColor = 'red'
        }
        if (!emailIsValid){
            emailInput.style.borderColor = 'red'
        }
        if (!companyNumberIsValid) {
            companyNumberInput.style.borderColor = 'red';
        }
        
    });
}

// Function to validate the form
function validate1() {
    let valid = true;

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passError').textContent = '';

    // Get input values
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
    }

    // Phone number validation
    const phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits or in the format XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX.';
        valid = false;
    }

    // Password match validation
    if (password1 !== password2) {
        document.getElementById('passError').textContent = 'Passwords do not match.';
        valid = false;
    }

    return valid; // Prevent form submission if invalid
}

// Function to check password strength
function checkPasswordStrength() {
    const password = document.getElementById('password1').value;
    const strengthText = document.getElementById('passwordStrength');
    let strength = 'Poor';
    let color = 'red';

    if (password.length >= 8) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if (hasUpperCase && hasLowerCase && hasNumber) {
            strength = 'Strong';
            color = 'green';
        } else if (hasUpperCase || hasLowerCase || hasNumber) {
            strength = 'Medium';
            color = 'orange';
        }
    }

    strengthText.textContent = `Password Strength: ${strength}`;
    strengthText.style.color = color;
}

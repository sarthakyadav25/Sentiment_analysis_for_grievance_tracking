// Function to switch to the signup screen
function showSignup() {
    document.getElementById('login-section').classList.remove('active');
    document.getElementById('signup-section').classList.add('active');
    
    // Clear the login form input fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Function to switch back to the login screen
function showLogin() {
    document.getElementById('signup-section').classList.remove('active');
    document.getElementById('login-section').classList.add('active');
    
    // Clear the signup form input fields
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
}

// Function to handle login
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const demoEmail = 'user@example.com';
    const demoPassword = 'password123';

    if (email === demoEmail && password === demoPassword) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect Email or Password');
    }
}

// Function to handle signup
function signup(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    alert('Account created successfully! Please log in.');
    showLogin();
}

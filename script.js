// script.js

// Example function to handle login
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert("All fields are required.");
        return;
    }

    // Replace the following line with your Firebase or Django authentication logic
    console.log('Logging in with', username, password);
    window.location.href = 'dashboard.html'; // Redirect to dashboard
});

// Example function to handle signup
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Replace the following line with your Firebase or Django authentication logic
    console.log('Signing up with', email, username, password);
    window.location.href = 'dashboard.html'; // Redirect to dashboard
});

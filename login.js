document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add your authentication logic
    console.log('Email:', email);
    console.log('Password:', password);

    // Example: Store the email in local storage and redirect to the home page after successful login
    localStorage.setItem('userEmail', email);
    window.location.href = 'index.html';
});

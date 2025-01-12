
// Handle form submission and redirect to a new URL (using JavaScript)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the form
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
    // Redirect to the desired URL if the form is filled
        window.location.href = 'https://www.Paypal.com'; // Replace with your URL
    }
});
// Adding an event listener to the form
document.getElementById('userForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    let hasError = false; // Flag for tracking errors

    // Get form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    // Hide all error messages initially
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    messageError.style.display = 'none';

    // Validate name
    if (name === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        hasError = true;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        hasError = true;
    }

    // Validate phone number
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        phoneError.style.display = 'block';
        hasError = true;
    }

    // Validate message
    if (message === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        hasError = true;
    }

    // If no errors, send data to the server
    if (!hasError) {
        fetch('http://127.0.0.1:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.success) {
                    alert('Form submitted successfully!');
                    document.getElementById('userForm').reset(); // Reset the form
                } else {
                    alert('There was an error submitting the form.');
                }
            })
            .catch(function(error) {
                alert('An error occurred: ' + error.message);
            });
    }
});

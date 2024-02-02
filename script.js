// Get the button element
var button = document.querySelector('input[type="submit"]');

// Add a click event listener to the button
button.addEventListener('click', function(event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the values of the form fields
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	// Validate the form fields
	if (name === '' || email === '' || message === '') {
		alert('Please fill in all fields.');
		return;
	}

	// Send the form data to the server
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/submit-form');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			alert('Form submitted successfully!');
		} else {
			alert('Form submission failed. Please try again later.');
		}
	};
	xhr.send(JSON.stringify({
		name: name,
		email: email,
		message: message
	}));
});

const signup = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#username-row').value.trim();

	if (name) {
		try {
			// uses the login module to handle login
			const response = await fetch('/user', {
				method: 'POST',
				body: JSON.stringify({ name }), // hand off
				headers: { 'Content-Type': 'application/json' },
			});
			// Use the login module to handle signup
			// await response.json(name, email, password);
			// this is for debugging purposes
			console.log(response);
			// Redirect the browser to the homepage
			document.location.replace('/trainer');
		} catch (error) {
			console.log(error);
		}
	}
};

const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', signup);

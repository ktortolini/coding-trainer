const signup = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#username-row').value.trim();
	console.log(name);

	if (name) {
		const response = await fetch('/user', {
			method: 'POST',
			body: JSON.stringify({ name: name }),
			headers: { 'Content-Type': 'application/json' },
		});
		// this is for debugging purposes
		console.log(response);
		// checks for positive response
		if (response.ok) {
			document.cookie = `user_name=${name};path=/`;
			document.location.replace('/trainer');
		} else {
			const errorData = await response.json();
			console.error(errorData.error);
		}
	} else {
		console.error(`if (${name}) {...}`, name);
	}
};

const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', signup);

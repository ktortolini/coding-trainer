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

const showScores = async () => {
	const response = await fetch('/api/scores');
	const data = await response.json();
	// adds regular expressions to extract from data
	let perMinute = new RegExp('[^0-9]*([0-9]+).*', 's');
	let totalCorrect = new RegExp('[^0-9]*[|][^0-9]*([0-9]+)', 's');
	// compares the regular expression to the data
	if (data.user_name) {
		let name = JSON.stringify(data.user_name);
		document.querySelector('#username').textContent = name;
	} else {
		document.querySelector('#username').textContent = `???`;
	}
	if (JSON.stringify(data).match(perMinute)) {
		let wpm = JSON.stringify(data).match(perMinute);
		document.querySelector('#wpm').textContent = wpm[1];
	} else {
		document.querySelector('#wpm').textContent = `???`;
	}
	if (JSON.stringify(data).match(totalCorrect)) {
		let correct = JSON.stringify(data).match(totalCorrect);
		document.querySelector('#correct').textContent = correct[1];
	} else {
		document.querySelector('#correct').textContent = `???`;
	}
};

const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', signup);

window.addEventListener('load', () => {
	// shows the high scores
	showScores();
});

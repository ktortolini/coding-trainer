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
	// accessing after
	data.sort((a, b) => {
		return b.wpm - a.wpm;
	});
	// this is for debugging purposes
	console.log('data', data);
	// adds regular expressions to extract from data
	let perMinute = new RegExp('[^0-9]*([0-9]+).*', 's');
	let totalCorrect = new RegExp('[^0-9]*[|][^0-9]*([0-9]+)', 's');
	// compares the regular expression to the data
	if (data[0].user_name) {
		let name = JSON.stringify(data[0].user_name);
		document.querySelector('#username1').textContent = name;
	} else {
		document.querySelector('#username1').textContent = `???`;
	}
	document.querySelector('#wpm1').textContent = data[0].wpm;
	document.querySelector('#correct1').textContent = data[0].correct;
	// compares the regular expression to the data
	if (data[1].user_name) {
		let name = JSON.stringify(data[1].user_name);
		document.querySelector('#username2').textContent = name;
	} else {
		document.querySelector('#username2').textContent = `???`;
	}
	document.querySelector('#wpm2').textContent = data[1].wpm;
	document.querySelector('#correct2').textContent = data[1].correct;
	// compares the regular expression to the data
	if (data[2].user_name) {
		let name = JSON.stringify(data[2].user_name);
		document.querySelector('#username3').textContent = name;
	} else {
		document.querySelector('#username3').textContent = `???`;
	}
	document.querySelector('#wpm3').textContent = data[2].wpm;
	document.querySelector('#correct3').textContent = data[2].correct;
	// if (JSON.stringify(data).match(perMinute)) {
	// 	let wpm = JSON.stringify(data).match(perMinute);
	// 	document.querySelector('#wpm').textContent = wpm[1];
	// } else {
	// 	document.querySelector('#wpm').textContent = `???`;
	// }
	// if (JSON.stringify(data).match(totalCorrect)) {
	// 	let correct = JSON.stringify(data).match(totalCorrect);
	// 	document.querySelector('#correct').textContent = correct[1];
	// } else {
	// 	document.querySelector('#correct').textContent = `???`;
	// }
	document.querySelector('#wpm1').textContent = data[0].wpm;
	document.querySelector('#correct1').textContent = data[0].correct;
};

const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', signup);

window.addEventListener('load', () => {
	// shows the high scores
	showScores();
});

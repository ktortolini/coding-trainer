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
			// this is for debugging purposes
			const errorData = await response.json();
			console.error(errorData.error);
			// this is for user feedback
			window.alert(errorData.error);
			document.location.reload();
		}
	} else {
		console.error(`if (${name}) {...}`, name);
	}
};

const showScores = async () => {
	const response = await fetch('/api/scores');
	const data = await response.json();
	// accessing after the response and sorting
	data.sort((value1, value2) => {
		// assigns a weighted value for correct
		let weightValue1 = value1.correct * 0.25;
		let weightValue2 = value2.correct * 0.25;
		// adds the correct values to the cpm value
		let totalScore1 = value1.wpm + weightValue1;
		let totalScore2 = value2.wpm + weightValue2;
		// returns a value for sorting purposes
		return totalScore2 - totalScore1;
	});
	// this is for debugging purposes
	console.log('data', data);
	// adds regular expressions to extract from data
	let perMinute = new RegExp('[^0-9]*([0-9]+).*', 's');
	let totalCorrect = new RegExp('[^0-9]*[|][^0-9]*([0-9]+)', 's');
	// grabs the container element for dynamic creation
	const scrollContainer = document.querySelector('.score-scroll');
	// loops through the data to create dynamic html
	data.forEach((item, index) => {
		// creates the necessary article element
		let arElement = document.createElement('article');
		if (index + 1 === 1) {
			arElement.classList.add('t-row', 'gold');
		} else if (index + 1 === 2) {
			arElement.classList.add('t-row', 'silver');
		} else if (index + 1 === 3) {
			arElement.classList.add('t-row', 'bronze');
		} else if (
			index + 1 !== 1 &&
			index + 1 !== 2 &&
			index + 1 !== 3 &&
			(index + 1) % 2 === 0
		) {
			arElement.classList.add('t-row', 'green1');
		} else if (
			index + 1 !== 1 &&
			index + 1 !== 2 &&
			index + 1 !== 3 &&
			(index + 1) % 2 !== 0
		) {
			arElement.classList.add('t-row', 'green2');
		}
		// creates the note element
		let ntElement = document.createElement('note');
		ntElement.classList.add('grid');
		// adds the paragraph tags with a for loop
		for (let i = 0; i < 4; i++) {
			let pElement = document.createElement('p');
			if (i === 0) {
				pElement.classList.add('tt-row', `grid-item-position-${index + 1}`);
				pElement.textContent = index + 1;
			} else if (i === 1) {
				pElement.classList.add('t-row', `grid-item-name-${index + 1}`);
				pElement.id = `username${index + 1}`;
				try {
					let name = JSON.stringify(item.user_name);
					// shortens the name if too long
					let sanitizedName = name.slice(1, -1);
					if (sanitizedName.length > 6) {
						sanitizedName = sanitizedName.slice(0, 3) + '...';
					}
					pElement.textContent = sanitizedName;
				} catch (error) {
					console.log(`catch (${error.stack})`);
				}
			} else if (i === 2) {
				pElement.classList.add('t-row', `grid-item-num-${index + 1}`);
				pElement.id = `cpm${index + 1}`;
				try {
					pElement.textContent = item.wpm;
				} catch (error) {
					console.log(`catch (${error.stack})`);
				}
			} else if (i === 3) {
				pElement.classList.add('t-row', `grid-item-score-${index + 1}`);
				pElement.id = `correct${index + 1}`;
				try {
					pElement.textContent = item.correct;
				} catch (error) {
					console.log(`catch (${error.stack})`);
				}
			}
			// appends the p element to the note
			ntElement.appendChild(pElement);
		}
		// appends the note to the article
		arElement.appendChild(ntElement);
		// appends the article to parent element
		scrollContainer.appendChild(arElement);
	});
};

const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', signup);

window.addEventListener('load', () => {
	// shows the high scores
	showScores();
});

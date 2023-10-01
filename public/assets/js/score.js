const score = {
	value: 0,
	setScore: function (score) {
		// this is for debugging purposes
		console.log(`score.setScore(${score})`);
		fetch('/api/scores', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(score),
		});
	},
	getScore: function () {
		return {
			perMinute: function () {
				// this is for debugging purposes
				console.log(`score.getScore().perMinute()`);
				let elementContent = document.getElementById('score').textContent;
				let regularExpression = new RegExp('[^0-9]*([0-9]+)', 's');
				// this is for debugging purposes
				console.log(`(${elementContent}).textContent()`);
				// finds a match in the string
				if (elementContent.match(regularExpression)) {
					let wpmMatch = elementContent.match(regularExpression);
					let wpm = elementContent.match(regularExpression)
						? wpmMatch[1]
						: 0;
					// this is for debugging purposes
					console.log(`parseInt(elementContent.match()...?.${wpm})`);
					return wpm;
				} else {
					// this is for debugging purposes
					console.log(`!elementContent.match(${regularExpression})`);
					// returns a default value
					return 0;
				}
			},
			totalCorrect: function () {
				// this is for debugging purposes
				console.log(`score.getScore().totalCorrect()`);
				let elementContent = document.getElementById('score').textContent;
				let regularExpression = new RegExp(
					'[^0-9]*[|][^0-9]*([0-9]+)',
					's',
				);
				// this is for debugging purposes
				console.log(`(${elementContent}).textContent()`);
				// finds a match in the string
				if (elementContent.match(regularExpression)) {
					let correctMatch = elementContent.match(regularExpression);
					let correct = elementContent.match(regularExpression)
						? correctMatch[1]
						: 0;
					// this is for debugging purposes
					console.log(`parseInt(elementContent.match()...?.${correct})`);
					return correct;
				} else {
					// this is for debugging purposes
					console.log(`!elementContent.match(${regularExpression})`);
					// returns a default value
					return 0;
				}
			},
			totalScore: function () {
				// this is for debugging purposes
				console.log(`score.getScore().totalScore()`);
				return {
					wpm: score.getScore().perMinute(),
					correct: score.getScore().totalCorrect(),
					user_name: document.cookie.split('=')[1],
				};
			},
		};
	},
};

window.score = score;

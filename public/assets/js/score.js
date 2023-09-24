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
				let elementContent = document.getElementById('score').textContent;
				let regularExpression = new RegExp('[^0-9]*(?<wpm>[0-9]+).*', 'gs');
				// this is for debugging purposes
				console.log(`(${elementContent}).textContent()`);
				// finds a match in the string
				if (elementContent.match(regularExpression)) {
					let wpm = parseInt(
						elementContent.match(regularExpression).groups?.wpm,
					);
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
				let elementContent = document.getElementById('score').textContent;
				let regularExpression = new RegExp(
					'[^0-9]*[|][^0-9]*(?<correct>[0-9]+)',
					'gs',
				);
				// this is for debugging purposes
				console.log(`(${elementContent}).textContent()`);
				// finds a match in the string
				if (elementContent.match(regularExpression)) {
					let correct = parseInt(
						elementContent.match(regularExpression).groups?.correct,
					);
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
				return {
					wpm: this.perMinute(),
					correct: this.totalCorrect(),
				};
			},
		};
	},
};

window.score = score;

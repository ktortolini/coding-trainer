![Itch.io](https://img.shields.io/badge/Itch-%23FF0B34.svg?style=for-the-badge&logo=Itch.io&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

![GitHub](https://img.shields.io/github/license/ktortolini/random-cards?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/ktortolini/random-cards?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/ktortolini/random-cards?color=green&style=flat-square)
[![GitHub page](https://img.shields.io/badge/GitHub%20Page-ktortolini.github.io/coding--trainer-blue.svg?style=flat-square)](https://ktortolini.github.io/coding-trainer/)

# Coding Trainer

## _Description_

This repository has an educational tool I made using JavaScript, as well as a robust front-end with HTML5 files, and CSS3 styles to handle the GUI and keyboard display, along with a fast back-end with JS(ES6) files. The purpose of this repository is to show a degree of creativity, and a general enthusiasm for making self-improvement and skill development tools in my free time, using such coding techniques as:

- Dynamic styling applied with a `load` event in order to improve the visual appearance of the loading sequence.
- Dynamic pixel-art animations using `@keyframes` and performance improvements using a `preloader` element to preemptively avoid loading issues.
- Calculations using `bitwise operations` and `deltatime` to find characters per minute and formulate a score that may be displayed in the high-score section of the web application.
- Regular Expressions to find numerical data on the page, using meta-characters like `[]`, `()`, `+` and `?` to search for specific patterns within various strings.

## _Usage_

The root directory of the web application will show the high-scores and display a sign-up panel using the following `HTML` code:

```html
<main>
   <!-- the section element is the container for the high-scores -->
	<section class="grphc-container block">
      <!-- the article elements are given a background representing their place -->
		<article class="t-row gold">
         <!-- the note elements are styled with grid display -->
         <note class="grid">
            <!-- first place username, cpm, and total correct points are shown -->
            <p class="t-row grid-item-name-1" id="username1"></p>
				<p class="t-row grid-item-num-1" id="wpm1"></p>
				<p class="t-row grid-item-score-1" id="correct1"></p>
         </note>
      </article>
		<article class="t-row silver">
         <note class="grid">
            <!-- second place username, cpm, and total correct points are shown -->
            <p class="t-row grid-item-name-2" id="username2"></p>
				<p class="t-row grid-item-num-2" id="wpm2"></p>
				<p class="t-row grid-item-score-2" id="correct2"></p>
         </note>
      </article>
		<article class="t-row bronze">
         <note class="grid">
            <!-- third place username, cpm, and total correct points are shown -->
            <p class="t-row grid-item-name-3" id="username3"></p>
				<p class="t-row grid-item-num-3" id="wpm3"></p>
				<p class="t-row grid-item-score-3" id="correct3"></p>
         </note>
      </article>
	</section>
</main>
```

The high-score is updated with the following `JS` code:

```js
// initiates the variable for the hig-score
var highscore = 0;

// when the player has drawn three cards the score is compared with the high-score
if (score > highscore) {

   highscore = score;

   // then the highscore is formatted using the statements below
   let formattedHighscore = highscore.toString().padStart(3, "0");
   document.getElementById("highscore").textContent = " " + formattedHighscore;

}
```

Underneath the high-score, the most recently drawn card will be shown, and this is achieved with the following `HTML` code:

```html
<!-- the games starts with a picture of a face-down card centered with the css file -->
<section class="grphc-container shown">
	<img
		id="card"
		alt="card image here"
		src="./assets/cards/default.png"
		width="85"
		height="121"
	/>
</section>
```

The picture is updated with the following `JS` code:

```js
// initiates the variable for the picture of the card
var cardPicture = document.getElementById("card");

// when the player hits the enter button or taps the screen a random card is drawn
function drawRandomCard(event) {

   if (event.code === "Enter" || event.type === "click") {

      // this is the method being used to select a random card
      let randomCard = Math.floor(Math.random() * totalCards.length);

      // the number that has been returned is used to find the name and value of the card
      let cardName = totalCards[randomCard][0];
      let cardValue = totalCards[randomCard][1];
      console.log("Card that you have drawn:", cardName);
      console.log("Value of the drawn card:", cardValue);

      // then the card name is used to find the corresponding picture
      cardPicture.src = "./assets/cards/" + cardName + ".png";

   }

}
```

Underneath the picture of the card is a blinking request for the player to hit the enter button on their keyboard or tap the screen on their mobile device. This effect is achieved with the following `CSS` code:

```css
@keyframes blinkAnimation {

   0% {

      /* there is no effect in this frame */

   } 50% {

      /* effect is inserted in this frame */
      color: var(--black-color);

   } 100% {

      /* there is no effect in this frame */

   }

}

/* then the animation created above is applied to the id selector */
.p-row {

   /* the animation is played over and over */
   animation: blinkAnimation 0.62s infinite;

}
```

Underneath the blinking request is the player's score achieved with the following `HTML` code:
```html
<!-- the score is also affected by a 'p' selector in the css file that centers everything -->
<p>
	Score &colon; <span id="score">000</span>
	<!-- future feature: player's will be able to add their name to a leader-board -->
	<span id="input-name"></span>
</p>
```

The score is updated with the following `JS` code:

```js
// initiates the variable for the score
const zeroScore = 0;
var score = 0;

// drawing a heart awards double points!
if (cardName.includes("Hearts")) {

   cardValue *= 2;

}

// the player's score gets additional points based on the value of the drawn card
score += cardValue;

// then the score is formatted using the statements below
let formattedScore = score.toString().padStart(3, "0");
document.getElementById("score").textContent = formattedScore;

// the statement below divides the number of draws by three
if (drawCount % 3 === 0) {
            
   // if the remainder is zero the code below is run
   setTimeout ( function() {

      let clearScore = zeroScore.toString().padStart(3, "0");

      console.log("Your limit has been reached.");
      console.log("Your final score:", score);

      document.getElementById("score").textContent = clearScore;

   }, 1000); // an argument is placed here of 1 second delaying the whole function

   // lastly, the score is reset
   score = zeroScore;

}
```

Well, that's the essence of what is happening when you play the game. There are plans to add more features later on, but for now this is a game based solely on luck that isn't much fun yet. 🤷

But I had a lot of fun making it.

## _BitKit_

Introducing `bitkit.css`, a lightweight framework designed primarily for the final project of the comprehensive EDX Full Stack Web Development online program. To learn about the online program from EDX visit the link here: https://www.edx.org/learn/full-stack-development. Enchanted with nostalgic and old-school games, the goal of `bitkit.css` is to provide a seamless experience in creating games reminiscent of the classic Contra, R-Type series, and other retro side-scrolling arcade games. To capture the visual appeal of old-school arcade games `bitkit.css` has a built in television scanning effect that was built with guidance from a tutorial by [aleclownes](https://aleclownes.com/) about recreating the effect of a Cathode Ray Tube (CRT) display. Using the following resource (http://aleclownes.com/2017/02/01/crt-display.html) a very subtle and non-obtrusive effect was created to bring a captivating layer of authenticity to future pixel game projects. 

Currently, classes `.flex`, `.block`, `.inline-flex`, and `.inline-block` provide block-level design capabilities to enhance the layout and style of the webpage:

- `.flex` class allows an HTML5 container to have flexible positioning and spreads out children elements for adaptive designs.
- `.block` class allows an HTML5 container to have a more traditional style, letting children elements fully occupy the parent element.
- `.inline-flex` class allows an HTML5 container to have flexible positioning while allowing adjacent placement without line breaks.
- `.inline-block` class allows an HTML5 container to maintain a traditional style while allowing adjacent placement without line breaks.

Currently, classes `.bdy-container`, and `.grphc-container` provide consistency with body elements and graphical elements optimizing the creation of visually appealing layouts across various screen sizes:

- `.bdy-container` class allows an HTML5 body tag to have the height set to one hundred viewport height units for ensuring consistency when the body occupies the viewport.
- `.grphc-container` class allows an HTML5 graphical element to occupy the center regardless of the chosen layout and display class being applied.

Currently, classes `.t-row`, `.p-row`, `.nb-row`, `.btn-row`, `.i-row`, and `.c-row` provide simple graphical interface solutions to achieve a distinct and nostalgic look for any web application:

- `.t-row` class allows an HTML5 row element to be shown in a clean and simple fashion and was primarily for unobtrusive text within the layout.
- `.p-row` class allows an HTML5 row element to prompt the user and features a blinking animation to emphasize important messages or notifications.
- `.nb-row` class allows an HTML5 navbar element to house a simple and minimally styled navigation menu to store high-scores and high-score tables.
- `.btn-row` class allows an HTML5 button element to assume a bold font style, a centered layout, and a defined size for nostalgic user interface buttons.
- `.i-row` class allows an HTML5 row element to highlight important information on the screen by adding visual prominence to the content with a solid border.
- `.c-row` class allows an HTML5 row element to fit within a multiple-choice question or web application modal as a selectable choice element.

Still in its infancy, `bitkit.css` offers an intuitive way to accelerate the design process of a retro side-scrolling arcade game. Further improvement will be made throughout the coming months. Stay tuned for further documentation and additional changes. ✏️
## _Credits_

The ITCH, JS, and GITHUB PAGES readme file icons on the top were made by [Ileriayo](https://github.com/Ileriayo) with a link provided below: https://github.com/Ileriayo/markdown-badges#badges. 

Tremendous thank you to [Androx](https://twitter.com/Paradox1821) for the asset pack used to create this mini project with the link provided below: https://byandrox.itch.io/pixel-art-poker-deck.

There were a few helpful tutorials that guided me through this project. First, the multidimensional arrays tutorial by [JavaScriptTutorial](https://www.javascripttutorial.net/) was a great resource - link: https://www.javascripttutorial.net/javascript-multidimensional-array/.

Next, a few resources from [W3Schools](https://www.w3schools.com/) were very helpful, including their resource about favicons (https://www.w3schools.com/html/html_favicon.asp). Then there was their resource about `getElementById()` (https://www.w3schools.com/jsref/met_document_getelementbyid.asp) that was used extensively in the javascript file. Also, there was their resource about `document.body` (https://www.w3schools.com/jsref/prop_doc_body.asp) which helped me to understand how to dynamically call and manipulate the `HTML` elements.

Lastly, the Javascript performance tutorial by [TapasAdhikary](https://www.tapasadhikary.com/) was another great resource - link here: https://www.freecodecamp.org/news/javascript-performance-async-defer/.

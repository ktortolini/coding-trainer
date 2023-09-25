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

## _Table of Contents_

-  [Description](#description)
-  [Installation Instructions](#installation)
-  [Usage Information](#usage-information)
-  [Heroku Deployment](#heroku-deployment)
-  [Credits](#credits)
-  [License](#license)
-  [Questions](#questions)

## _Installation_

```bash
git clone https://github.com/ktortolini/coding-trainer.git
cd coding-trainer
npm install
```

If the user wishes to seed the database and use their own MYSQL server, they should make sure to use a `.env` file populated with their own credentials. Then use `source` within the MySQL server (after logging in with the credentials) to set up the initial database, and then type the following into the terminal:

```bash
npm run seed
```

Then, when the web app is started, the user will see the start page of the web application populated with the sample data was provided in the `seed.js` file. Otherwise, the client can access the application without installation requirements by accessing the [Heroku Deployment](#heroku-deployment).

## _Usage Information_

The root directory of the web application will show the high-scores and display a sign-up panel using the following `HTML` code:

```html
<main>
   <!-- the section element is the container for the high-scores -->
	<section class="grphc-container block">
      <!-- this article element is given a gold background for first place -->
		<article class="t-row gold">
         <!-- the note elements are styled with grid display -->
         <note class="grid">
            <!-- first place username, cpm, and total correct points are shown -->
            <p class="t-row grid-item-name-1" id="username1"></p>
				<p class="t-row grid-item-num-1" id="cpm1"></p>
				<p class="t-row grid-item-score-1" id="correct1"></p>
         </note>
      </article>
      <!-- this article element is given a silver background for second place -->
		<article class="t-row silver">
         <!-- the note elements are styled with grid display -->
         <note class="grid">
            <!-- second place username, cpm, and total correct points are shown -->
            <p class="t-row grid-item-name-2" id="username2"></p>
				<p class="t-row grid-item-num-2" id="cpm2"></p>
				<p class="t-row grid-item-score-2" id="correct2"></p>
         </note>
      </article>
      <!-- this article element is given a bronze background for third place -->
		<article class="t-row bronze">
         <!-- the note elements are styled with grid display -->
         <note class="grid">
            <!-- third place username, cpm, and total correct points are shown -->
            <p class="t-row grid-item-name-3" id="username3"></p>
				<p class="t-row grid-item-num-3" id="cpm3"></p>
				<p class="t-row grid-item-score-3" id="correct3"></p>
         </note>
      </article>
	</section>
</main>
```

⚠️ This web application is in the beta-phase and is currently being tested. During this phase of development the readme file will be worked on and improved. In the meantime, check out the Heroku deployment and have fun testing the training capabilities of the web application. ⚠️

## _Heroku Deployment_

This web application has been deployed on [Heroku]().
## _Credits_

The ITCH, JS, NODE and HEROKU readme file icons on the top were made by [Ileriayo](https://github.com/Ileriayo) with a link provided below: https://github.com/Ileriayo/markdown-badges#badges. 

Likewise, the wonderful keyboard asset by [illugion](https://illugion.itch.io/) was used to create this mini project, the specific link provided below: https://illugion.itch.io/pixel-keyboard.

⚠️ Further citations will be added throughout the beta-phase to provide resources that proved helpful during the debugging process. ⚠️

## _License_

Coding Trainer is licensed under the MIT License.

## _Questions_

Contact the author [ktortolini](https://github.com/ktortolini) via email ✉ <a>ktortolini@smu.edu</a>.

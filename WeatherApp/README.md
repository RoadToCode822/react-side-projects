#Weather App - Followed Stephen Garder's Udemy Course#

##Introduction##

Let's begin with the app structure:
```
├── Weather App
├──── actions                    # Test files (alternatively `spec` or `tests`)
│     ├── index.js
├──── components                    # Test files (alternatively `spec` or `tests`)
│     ├── app.js		# Load and stress tests
│     ├── chart.js         # End-to-end, integration tests (alternatively `e2e`)
│     └── google_map.js
├──── containers                    # Test files (alternatively `spec` or `tests`)
│     ├── search_bar.js
│     ├── weather_list.js
├──── reducers                    # Test files (alternatively `spec` or `tests`)
│     ├── index.js
│     ├── reducer_weather.js
├──── index.js				// 
└── style				// Style folder that contains the style.css file for custom styling
├──── style.css				// Place custom style here
├── test				// Test Folder
```



###Introduction###
The goal is to relate the code I wrote and structure and present it clearly. Furthermore, connect certain code to concepts discussed in the official documentation.

Explain the app structure and what goes where. 


1. Redux Documentation
2. React Documentation
3. Glossary


I am going to layout how I made this app just so that the concepts solidify. If you find this useful, go ahead and hit that star button :)
(https://octodex.github.com/images/yaktocat.png)


###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install depdencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```

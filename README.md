# Techstars Engineering: Fun Front to Back

Welcome to the Techstars Engineering Full Stack code Challenge. We work on diverse projects and value team members who can do it all from CSS to DevOps and everything inbetween.  We love to code and are passionate about doing it well.

This is your chance to show the team how you approach problems and give us insight into your abilities. For the challenge, you are required to design, develop, and style a Full Stack application using Rails or Node as the API and React as the front-end. Do not use Rails templates for your UI. Feel free to use any third party libraries you see fit. You will have **48 hours** to submit a solution for the given requirements.  If you need more time due to schedule conflicts, just let us know.  We value people with good communication skills. We strongly prefer that whatever you do, you do it well, as opposed to trying to razzle dazzle us.  Please read all the instructions carefully and email us if you have any questions. 

## Getting Started
First, fork this repository into your own GitHub account. Then complete each of the parts below, working as you would in a professional environment. Once you have completed all the sections, please update the README, to reflect how to build and run your application, as well as any architectural decisions you have made. Add your deployment url to your github repo so we can test the deployed application. When you believe you are ready to submit your challenge, submit a pull request into our master branch. We will see the notification and get back to you on next steps. 

## What we are looking for

* Ability to set up a REST API (Node or Rails preferred).
* Ability to set up a Relational Database
* Understanding of the HTTP protocol and how it works with REST API conventions
* Understanding the basics of CRUD
  * Create
  * Read
  * Update
  * Delete
* Ability to layout and design an HTML page with CSS
* Ability to create an intuitive UI using a front-end framework (React preferred)
* Ability to use Javascript on the front-end to interact with a REST API
* Ability to develop automated tests for your application
* Ability to translate user stories into a web application
* Ability to deploy a front-end and back-end stack.


## The Challenge

### Intro

Build an application that will be a directory of companies, and the people who have founded them. The main page should be a list of all the companies with some high-level information (Name, Short Description, City, State). When the user clicks on a company, show its details. Included in those details will be the founding members of company and a long description.

### Part 1 : Companies Index

1. Create the basic layout for the page
2. Create a list view of all companies
  * Company Name
  * Company Location
  * Short Description
3. Add ability to create a new company


![step 1](Step_1.png)

### Part 2 : Companies Create

1. Implement form to create a new company
2. Fields
    * Company Name __required__
    * Company Location (City, State) __required__
    * Company Description __required__
    * Founded Date


![step 2](Step_2.png)

### Part 3 : Company Details

1. Shows all of the Company's information
2. Ability to update Company
3. Ability to delete Company


![step 3](Step_3.png)

### Part 4 : Founders

1. In the Company details add the ability to add a Founder to a Company.
2. Each Founder can only belong to a single company.
3. Founder  Fields
    * Founder Full Name
    * Founder Title
4. Founders added should display in the company detail page.

![step 4](Step_4.png)

### Part 5 : Tests
Create a test suite for your application, writing unit and or functional tests that adequately cover the code base. TDD-ers will have already completed this challenge.

### Part 6 : Deployment 
 Sign-up for a Heroku account (or other provider) and deploy your application to the web. Please provide us with the deployed URL. Bonus points for using a provider other than Heroku like AWS or Digital Ocean.  Please seed your application with at least a dozen Companies and Founders.

### Next Steps
If you move onto the next stage of the interview process we will have you come in and pair program with our engineers and build on top of your code base.  Example features we might implement together would be to add category tags, add a search component or add images to Companies and Founders using a third party hosting service.


# DEPLOYMENT URL

This project is deployed with AWS Amplify and can be reached at this [URL](https://kellerproject.d1le9v6n9t7cl5.amplifyapp.com/)

# Project approach

This project was not only way to display my ability to build a Full Stack application with React and Node while showing how I approach problems but also a way to show myself with some honest realism where I am and where I need to get to. Going into this project I had worked in a full stack MERN application at my first developer job in a mostly frontend capacity a couple years ago. I went back into React learning some new things and using any resource I could find to help me set up my application. I tried to keep things simple since I was re-familiarizing myself with React again and decided to keep the main functionality within the main component so I could see everything connecting. I wanted to try useState hooks which had not come out when I was at my previous job. Using what I could remember from my time working in React and learning new ways to do things I was able to come up with ways to create solutions for the challenges. I was able to figure things out as I went along and if I could do it again I would have used more separate components to handle the individual functionalies such as adding a new company, or updating an existing company. I found that I was taking a little long to get sections done and didn't want to take up any more time so I'm submitting what I have now. With more time I would clean up the visuals for a smoother UX and cleaner UI. I would also build more robust state managment to deal with the creating and editing popups without bugs and make the actual cards look nicer than they are. I would also like to write more tests. I honestly haven't much experience writing tests and need to get that up to par. I also think that I could greatly simplify things structure-wise by dividing up functionality into reusable components such as an Add Company component and Edit Company component. I think I spent too much time on jumping around to different parts of the application to fix small things instead of focusing on one important thing at a time until that was solved. Overall this challenge helped me see where I can improve on my understanding of React, Node, relational databases, and overall fullstack architecture.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `nodemon`

Runs the server to connect to the mySQL database.\
Using the terminal navigate to 'server' folder.\
npm install nodemon or yarn add nodemon.\
Run command 'nodemon' to start server.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
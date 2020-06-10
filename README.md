## Hi Craig & Team!

Thanks so much for you consideration for this role. I wanted to share a few details and give context for the architecture of this app.

* client: TS/React/TailwindCSS using v16+ hooks patterns
  * this was my first time using tailwind after hearing a lot of good things about it and it's really nice for quickly creating reusable styled components, especially with utility & layout classes
  * testing with _cypress_ which collects code coverage! (new since the last time I used it)

* server: TS/Node/Prisma
  * this is the first time I've used Prisma and I really like it, though the v2 release doesn't support some of the earlier version's functionality yet, which made for some surprises.
  * testing with mocha/chai

* database: aws RDS managed postgresql instance

* hosting: the app is deployed to an EC2 instance using an aws application loadbalancer at either http://interview.nicecmpny.com or http://techstars-1173038303.us-west-2.elb.amazonaws.com


A couple of notes:
* There's still some needed refactoring but I wanted to get the app in good place with test coverage and meet the mvp first.
* Lots of learnings with this project re: taking on a couple new technologies in the app as well as deployment
* The testing pattern is a little brittle because of a limitation I ran into with Prisma not being able to easily switch their client to use a diffrent db based on env. It seems to be something they're actively working on but it's worth noting that the version I used isn't recommended for production yet.
* always more to do given more time! (stretch goal was to deploy with docker) I'll look forward to talking with ya'll :)


## Usage
* run `npm i` in both the client and server directories. I set these up as standalone repos initially so there is are
some config and dependencies that are duplicated

## Client specific scripts
### In the client directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


#### `npm run e2e`

Launches cypress e2e suite

#### `npm run coverage`

Prints most recent coverage report (must run e2e tests first!)


### From the server directory: 

* add '.env3' file to root `touch .env3`
* add 'DB_URL' connection string to .env3 `DB_URL="I'LL SEND IT TO YOU :) "`
* `npm run start`  (serves at http://localhost:4000)


### Testing

* `npm run e2e`

* I wrote e2e tests for all of the routes. Some routes are not yet being used by the client but are still tested
* coverage will printout after test run. I didn't 
* Tests cleanup after themselves, but setup is not great because I learned that prisma v2 has some limitations around 
multi tenant db so the same database is used for the app and tests right now



# Thanks again ya'll


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



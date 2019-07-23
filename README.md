# Fischer Full-Stack-Challenge 🍭🍬🍫

[Deployed URL](https://businesschallenge.herokuapp.com//)

[Rails API Resources JSON URL](https://fullstackbusinesses.herokuapp.com/businesses.json)

`git clone`

`bundle && install`

run locally: `foreman start -f Procfile.dev`

For Rails generated Businesses/Founders routes:

`http://localhost:3000/businesses for Rails XML CRUD`

`http://localhost:3000/founders for Rails XML CRUD`

Test routes httPie: `http GET/DELETE/PUT/POST :3000/businessses.json or :businesses/:id.json`

```haskell
Business: {
  id: int (auto),
  name: string,
  longdesc: string,
  shortdesc: string,
  founded: int,
  founders: string,
  location: string,
  timestamps (auto)
}

Founder: {
  id: int (auto).
  name: string,
  businessid: int,
  timestamps (auto)
}
```

## Process

Staying within the ~48hr limit for the project, the largest problem I ran into was the webpack build errors around Heroku deployment of the `react-on-rails Client` setup. Locally, the files build but the 'application.html.erb' build for deployment was unable to locate the `webpack-bundle` built by Heroku (~4 hrs). The frontend is therefore directly cloned out of the Client package and deployed seperately, for now, on Heroku (no logistical or styling changes exist between the versions). My main problem here being the early decision to build the React App in the Client folder as opposed to `app/javascripts/`. React testing is set up with simple rendering with `Jest` with babel-configs in the Spec folder as well. Cursory.

---

## Getting Started

[x] update the README, to reflect how to build and run your application, as well as any architectural decisions you have made.

[x] Add your deployment url to your github repo so we can test the deployed application.

[x] When you believe you are ready to submit your challenge, submit a pull request into our master branch. We will see the notification and get back to you on next steps.

## What we are looking for

[x] Ability to set up a REST API (Strongly Recommend Rails).
[x] Ability to set up a Relational Database - PostgreSQL
[x] Understanding of the HTTP protocol and how it works with REST API conventions
[x] Understanding the basics of CRUD

- Create
- Read
- Update
- Delete
  [x] Ability to layout and design an HTML page with CSS
  [x] React
  [x] Ability to use javascript on the front-end to interact with a REST API
- Ability to develop automated tests for your application
  [x] Ability to translate user stories as into a web application
  [] Ability to deploy a front-end and back-end stack.

## The Challenge

### Part 1 : Companies Index

[x] Create the basic layout for the page
[x] Create a list view of all companies
[x] Add ability to create a new company

### Part 2 : Companies Create

[x] Implement form to create a new company
[x] Fields
_ Company Name **required**
_ Company Location (City, State) **required**
_ Company Description **required**
_ Founded Date
<br />

![step 2](Step_2.png)

### Part 3 : Company Details

[x] Shows all of the company's information
[x] Ability to update company
[x] Ability to delete company
<br />

![step 3](Step_3.png)

### Part 4 : Founders

[x] In the Company details add the ability to add a Founder to a Company.
[] Each Founder can only belong to a single company.
[] Founder Fields

- [x] Founder Full Name
- [] Founder Title
  [x] Founders added should display in the company detail page.
  <br />

![step 4](Step_4.png)

### Part 5 : Tests

`rails test` -> Runs through 18 assertions in the test folder related to loading and responding with @business and @founder dummy data: ✅

`rspec` - basic tests for the 'FoundersController' are written with `rspec`. I have spent ~ 3 hours with this testing framework and am just starting to make some tests pass...testing frameworks are often accompanied with the same investment needed to learn entirely new languages

### Part 6 : Deployment

Sign-up for a Heroku account (or other provider) and deploy your application to the web. Please provide us with the deployed URL. Bonus points for using a provider other than Heroku like Digital Ocean.

[x] Please seed your application with at least a dozen Companies and Founders.

### Next Steps

If you move onto the next stage of the interview process we will have you come in and pair program with our engineers and build on top of your code base. Example features we might implement together would be to add category tags, add a search component or add images to Companies and Founders using a third party hosting service.

---

My steps:

`rails new full-stack-challenge --database=postgresql`

`rails g scaffold Business name:string shortdesc:text longdesc:text location:string founded:integer founders:array`

`rails g scaffold Founders name:string businessid:integer`

`rake db:migrate`

`gem 'webpacker_lite'`

`gem 'react_on_rails', '8.0.3'`

Running dev with react app:

`foreman start -f Procfile.dev`

Heroku:

`heroku create fullstackbusinesses`

database automatically provisioned with rails config

`heroku run rake db:migrate`

`heroku run rake db:seed`

error troubleshooting: yarn install issues with webpack (`"scripts": { "postinstall": "cd client && npm install" }`), `config.assets.js_compressor = Uglifier.new(harmony: true)`) - added a new setup with webpacker instead of webpacker_lite including app/javascript/application folder which will load on Heroku but the application.html.erb file cannot find the Bundle for the Client/app/react-on-rails creating an ActionView error. I spent a good 4 hours troubleshooting this error and have certainly learned a great dela more about the Rails build process and package layout.

---

## Resources

[Testing with RSpec and Jest](https://www.freecodecamp.org/news/how-to-get-started-testing-a-ruby-on-rails-reactjs-app-with-rspec-jest-and-enzyme-d058f415894e/)

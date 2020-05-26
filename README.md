# Techstars Engineering: Fun Front to Back

Submission to the Techstars Engineering Full Stack code Challenge, for creating and deploying a basic Company Directory web application.

## Architecture and Implementation Notes

I decided to create a Next.js app as I thought it would be one of the simplest ways to fulfill all of the stated requirements, and as I have been recently working with that framework. Using Next.js allowed me to easily create both the API and the frontend application with the same framework, and by pairing that with SQLite I was able to create an architecture that only requires Node.js to run. This felt like a very nice solution, as it makes the application easy to install, run, and maintain by a developer familiar with a single technology.

I utilized Material UI for styling all of my frontend components, as I believe it is a very clean library with robust features and support. All site functionality is accessed from the base URL, which does not allow navigation to individual company pages directly but provides a clean UI and felt well suited to an application of this scale.

I was hoping to source the data from AngelList since I had seen documentation for a "companies API," but unfortunately that API service was deprecated some time ago and the website for accessing their companies database was disabled while I was working on this challenge. As a result, I decided to manually seed the database with information I manually retrieved from [Built In Colorado](https://www.builtincolorado.com/).

## Requirements

- Node 12

## Installation/Development
- Install the application by running `yarn install` at the project root
- Run the development server using `yarn dev` and access the website at [http://localhost:3000](http://localhost:3000). Hot reloading should be active.

## Testing
- Run the tests with `yarn test`

## Deployment
Currently deployed on Heroku, live at: [https://techstars-company-directory.herokuapp.com/](https://techstars-company-directory.herokuapp.com/)

If desired, one can manually build the application for production deployment with `yarn build`.

# full-stack-challenge
Code challenge for prospective software engineers

## API
I created the API using Node Express. The folder is located under the main package at /api. I have decided to use a remote MYSQL database for the purpose of this project, to further reinforce the relational database aspect of the application. 
Included endpoints are 
* /companies
  * `GET`
  * `PUT ` (parameters: `name`, `city`, `state`, `date_founded`, `description`)
* /companies/id
  * `POST` (parameters: `name`, `city`, `state`, `date_founded`, `description`)
  * `GET` (unused in the application, but available if necessary)
  * `DELETE`
* /founders
  `GET`
  `PUT` (parameters: `name`, `title`, `company_id`
  
  ## React Frontend
  Application components are divided into hoc, component, and container files. 
  
  * Hoc is used as a top level for aux (a wrapper component for inline elements) and Layout
  * Component contains elements which are repeated within the application, but don't necessarily tell a "story" on their own.
  * Container elements are components which I considered "self-contained". In this case, they are the full company view and the two forms (founder and company). When viewed independently of the application, their purpose is clear, so I've considered them containers.
  
  For consistency's sake, when it comes to React, I prefer working with functional components and hooks. While you don't get the benefit of immediately being able to tell the type of component (stateful vs stateless), I find that as far as working in groups goes, it's easier to have a more consistent programming style. The development of hooks makes this doubly beneficial, as you get the best of both worlds. There's also something satisfying about writting `export default function` all one one line...
  
  ## Build
  The application is available online at https://mf-frontend-challenge.herokuapp.com/
  To run the application locally, run `npm start` from the api directory. In another terminal, run `npm start` from the parent directory. In its current configuration, the application is accessible at http://localhost:3000 with the api located at http://localhost:3004.
  
  Thank you so much for giving me the opportunity to participate in your coding challenge!

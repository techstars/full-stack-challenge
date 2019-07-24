# Rhys Goehring's TechStars Engineering Assessment

Thank you for the opportunity to complete this assessment, I hope you like what I've built and look
forward to hearing your feedback.

## Architectural Decisions
As this is one of the first Rails applications I've made in a couple of years, I decided
to build a separate Rails API and React Client rather than serving the React app from a
Rails server.

I deployed the Rails API to https://ancient-woodland-20852.herokuapp.com

The GitHub repo for the React app is located at https://github.com/rhysgoehring/full-stack-challenge-client
and is deployed to https://full-stack-challenge-client.rhysgoehring.now.sh/


## Building and Running the Application
The client and server are independent and run separately.

### Server
1. Clone this repository
2. Inside the root project directory, install dependencies with:
```sh
  bundle install
```
3. Create the database:
```sh
  rake db:create
```
4. Run database migrations:
```sh
  rake db:migrate
```
5. Seed the database:
```sh
  rake db:seed
```

6. Run Test Suite:
```sh
  bundle exec rspec
```

7. Start the server:
```sh
  rails s
```

### Client
1. Clone the client respository:
```sh
  git clone https://github.com/rhysgoehring/full-stack-challenge-client
```

2. In the project directory, install dependencies:
```sh
  yarn install
```
Or with NPM:

```sh
 npm install
```

3. Start the App
```sh
  yarn start
```
Or with NPM:

```sh
 npm start
```

4. Since the server is running on port 3000, you'll be prompted to run the app on another port,
   press 'Y' to do so.

5. App will open in new browswer window / tab.

## Project Issues
Since I hadn't used RoR in quite some time, I spent a good amount of project time doing tutorials and reading
some articles to make sure I knew what I was doing and to avoid any mistakes that may be easy to stumble into.

While this did help me create my Rails API using TDD, it left me with a little less time than I would have liked
to work on the React client. I had planned on using TDD for the React client as well, but I was a bit pressed for time by the time I started working on the front end. Ultimately, I was unable to include any tests for the client.

Although it was emphasized in the project instructions that strong functionality was a priority over "razzle dazzle", I had initially planned and was looking forward to having a well styled front end. Again, due to time
constraints I had when working on the React client I didn't have time to style the application very well and so it's a bit bare.

Finally, I did encounter one functionality issue I wasn't able to fix which was only allowing a Founder to belony to only a single company. I could not enforce this constraint and in my app, a founder can be added to a company if they already belong to another.




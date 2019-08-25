Collin Brockway
August 24, 2019

To the Techstars team:

This readme will document my process as I build this application.

I have actually not built anything full stack with Rails before,
so this will be a journey.


----NOTE----
All comments from me in the Ruby backend are prefixed with "CEB"
------------


The app needs a backend and a frontend; the backend will be built
in Ruby on Rails and contained in the directory "ruby-backend".
The frontend is built in React and will be contained in the
directory "react-frontend". UPDATE: not any more, React is now
included with Rails using the gem react-rails -- also the main
app is now in the root directory of the repo.

--Installed Ruby 2.6.3 with rbenv and installed Rails
--Installed SQLite 3 for the DB (after failed first attempt)
--Installed Yarn (after failed first attempt)
--Created new Rails app in ruby-backend
--Verify it works; default "Puma" server is up and running

Excluding online tutorials for MVC because this is only an API, no views.

--Changed the Ruby app to API only
--Got a simple root controller and status route up and running!

CHANGE OF PLAN! Including React via the gem react-rails instead of having
it separate and trying to serve static files or something like that.
I don't like doing it this way as I really would like to separate the backend
from the frontend completely, but since everything has to be in one repo,
that's the way it's going to be.

--Got the main React component up and running at the home route!
--Made a Companies component and got it talking to the /companies route
--Got the database up and running and made a Companies table,
  with some seed data. Works with the frontend so far
--Made a Members table, to contain the Founders, and so that later on
  other "members" can be added like employees etc. This caused the React
  side to throw a fit when I tried to add the founder data to the companies
  after the fact. It's an async and await issue; I solved it at last (after
  like 6 hours of trying every possible method) with what is basically
  a hack; a separate function adds the data synchronously and trips a flag
  in the state when the data is ready. It works but it is not ideal.

--Added create function in backend and newCompany form in frontend, both work
--Added some bits of styling to React frontend to make it look good
--Added details modal for companies
--Added update route and edit form, both work
--Added delete route and button, both work

--Added more member functionality - you can create new members and
  add them to existing companies as founders. You cannot add a founder
  to more than one company, and they must have a title.

--Moved all stuff from ruby-backend into the root directory for the repo,
  for deploy on Heroku

--Switched database from sqlite3 to postgresql because Heroku
  doesn't like sqlite3

--Got it deployed to Heroku finally.
--Created 12 example companies and added founders.

At this point I am calling it the first working version. Everything
does what it is supposed to.
### Usage

* `npm i`
* add '.env3' file to root `touch .env3`
* add 'DB_URL' connection string to .env3 `DB_URL="I'LL SEND IT TO YOU :) "`


### Testing

* `npm run e2e`

* I wrote e2e tests for all of the routes. Some routes are not yet being used by the client but are still tested
* coverage will printout after test run. I didn't 
* Tests cleanup after themselves, but setup is not great because I learned that prisma v2 has some limitations around 
multi tenant db so the same database is used for the app and tests right now


More detail in the client README! :)
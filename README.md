# sebamaster-movie-backend application

sebamaster-movie-frontend application can be found [here](https://github.com/sebischair/sebamaster-movie-frontend)

## Prerequisites

Both for the back end and front end application check

* nodejs [official website](https://nodejs.org/en/) - nodejs includes [npm](https://www.npmjs.com/) (node package manager)

Just for the backend application:

* mongodb [official installation guide](https://docs.mongodb.org/manual/administration/install-community/)
* mocha cli [installation](https://mochajs.org/#installation)



## Setup (before first run)

go to your project root folder via command line
```
cd path/to/workspace/sebamaster-movie-frontend
```

**install node dependencies**

```
npm install
```

**set up your database**

* create a new directory where your database will be stored (it's a good idea to separate data and business logic - the data directory should be on a different place than your app)
* start the database server 
```
mongod --dbpath relative/path/to/database
```
* create all database schemes and import data to begin with 
```
mongorestore dump/
```

**set up environment configuration**

copy one of the config files in the config directory and rename it to `config.js`. DO NOT check in your config.js file into source control. If you make a changes that your team members should be able to see (e.g. introducing a new config variable), change it in `config.dev_local.js`

You can also create more example config files in your `config` directory, e.g. `config.dev_server` for your development server. 

Note: While it is a good idea to have some configuration available for everyone, it is considered bad practice to check in sensitive data into source control (e.g. credentials for database access)

## running

start the web server

```
node server.js
```

## testing

**Important** Make sure that mocha is installed globally as it is specified in [documentation](https://mochajs.org/#installation). 

Some tests are already implemented using the test framework mocha: Simply run

```
mocha
```

...and hope that all tests will pass.

**Alternative/Additionally:** you could also use postman [postman](https://www.getpostman.com/)
You need to import the test and environment from `test/rest.json.postman_collection` and `test/localhost.postman_environment`

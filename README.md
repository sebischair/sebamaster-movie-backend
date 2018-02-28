# sebamaster-movie-backend application

sebamaster-movie-frontend application can be found [here](https://github.com/sebischair/sebamaster-movie-frontend)

## Prerequisites

Both for the back end and front end application check

* nodejs [official website](https://nodejs.org/en/) - nodejs includes [npm](https://www.npmjs.com/) (node package manager)

Just for the backend application:

* mongodb [official installation guide](https://docs.mongodb.org/manual/administration/install-community/)

## Setup (before first run)

Go to your project root folder via command line
```
cd path/to/workspace/sebamaster-movie-backend
```

**Install node dependencies**

```
npm install
```

**Set up your database**

* Create a new directory where your database will be stored (it's a good idea to separate data and business logic - the data directory should be on a different place than your app)
* Start the database server
```
mongod --dbpath relative/path/to/database
```
* Create all database schemes and import data to begin with
```
mongorestore dump/
```

**Set the environment variables**

This variables are based in your local configuration
```bash
export PORT=3000
export MONGODB_URI="mongodb://localhost:27017/moviedb"
export JWT_SECRET="very secret secret"
```

## Start the project

**Development environment**
```bash
npm run devstart
```

**Production environment**
```bash
npm start
```
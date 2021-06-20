# appointment-svc
A Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

**Step 1:** Make sure you have [Node.js](http://nodejs.org/) installed.

**Step 2:** Run these commands i.e., to clone the repo and installing dependencies:
```sh
git clone https://github.com/tanishkul/appointment-svc.git
npm install
```

**Step 3:** Create a file .env for the config variables which will be same as the .env.example.
```sh
NODE_ENV=dev
PORT=9000
MONGO_URL=mongodb://localhost:27017/appointment-db
START_HOUR=08:00
END_HOUR=17:00
DURATION=30
TIMEZONE=Asia/Kolkata
```
- NODE_ENV is the node environment.
- PORT is the port number on which the node server will be running.
- MONGO_URL is the mongoDB connection string.
- START_HOUR is the starting time of availability. Format- "HH-MM"
- END_HOUR is the ending time of availability. Format- "HH-MM"
- DURATION is the duration of slot. It should be in minutes.
- TIMEZONE is the timezone name.

**STEP 4:** Start the service, using this command:
```sh
npm start
```
Your app should now be running on [localhost:9000](http://localhost:9000/api/).

**NOTE:** If you change value of any .env variable, then you have to restart the service.

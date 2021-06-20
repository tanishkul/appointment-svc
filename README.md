# appointment-svc
A Nodejs app using [Express 4](http://expressjs.com/).

## Deployed Service
**https://appointment-svc.herokuapp.com/api/events/**

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

## API DOCUMENTATION

### 1. Free Slots
**Request**

`GET /api/events/` http://localhost:9000/api/events/?date=2021-06-19&timezone=asia/kolkata

**Request Query Params**:<br>

      date:2021-06-19<br>
      timezone:asia/kolkata

 **Response**

     {
    "data": [
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM"
    ],
    "message": "Slots fetched successfully",
    "status": "OK"
    }
   
### 2. Create event
**Request**

`POST /api/events/` http://localhost:9000/api/events/

**Request Body**:<br>

     {
      "dateTime": "2021-06-19T08:00:00.000Z",
      "duration": 30
     }

 **Response**

     {
    "data": {
        "start": 1624089600000,
        "end": 1624091400000,
        "endTime": "2021-06-19T08:30:00.000Z",
        "startTime": "2021-06-19T08:00:00.000Z",
        "originalId": "60cf04c1d958345ec42a14bf",
        "id": "60cf04c1d958345ec42a14bf"
    },
    "message": "Data created successfully",
    "status": "OK"
      }
 
### 3. Get events
**Request**

`POST /api/events/booked/` http://localhost:9000/api/events/booked/

**Request Body**:<br>

     {
      "startDate": "2021-06-19",
      "endDate": "2021-06-20"
     }

 **Response**

     {
    "data": [
        {
            "endTime": "2021-06-19T08:40:00+05:30",
            "startTime": "2021-06-19T08:00:00+05:30"
        },
        {
            "endTime": "2021-06-19T09:50:00+05:30",
            "startTime": "2021-06-19T09:10:00+05:30"
        },
        {
            "endTime": "2021-06-19T15:50:00+05:30",
            "startTime": "2021-06-19T15:10:00+05:30"
        },
        {
            "endTime": "2021-06-19T17:00:00+05:30",
            "startTime": "2021-06-19T16:30:00+05:30"
        },
        {
            "endTime": "2021-06-19T15:00:00+05:30",
            "startTime": "2021-06-19T14:30:00+05:30"
        },
        {
            "endTime": "2021-06-19T14:00:00+05:30",
            "startTime": "2021-06-19T13:30:00+05:30"
        }
    ],
    "message": "Events fetched successfully",
    "status": "OK"
    }
    
## Database and query design
  In this nodejs service, mongoose is used to save the events. This contains only one collection of events. In the events, dates are stored in the UTC format of time as well as in the timestamp format. When the user from different timezone hits the api, then the response will be converted to that timezone of the user/timezone in config.

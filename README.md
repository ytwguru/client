Advisors Website
--------------------

#### Main website for YT Advisors

### Requirements

* [Nodejs](https://nodejs.org)

### Installation

* From the root of the project `npm install`


### Tests

* **All:** `npm test`

### Debugging the application

* The application uses webpack to bundle the source code and hot loader to allow live refresh while developing.
* To run in development mode `npm run start`


### Build

* From the root of the project `npm run build`

### Deploy

* From the root of the project `npm run deploy`

### ENVIRONMENT VARIABLES

* Make sure the following environment variables are setup before the application runs.  For a local testing, you can create an .env file in the 
 root director with the values included.

```
DEPLOY_AWS_ACCESS_KEY_ID=<update with amazon key>
DEPLOY_AWS_SECRET_ACCESS_KEY=<update with amazon secret key>
DEPLOY_AWS_REGION=<update with amazon region>
CDN_BASE=<update with CloudFront cdn>
S3_BUCKET=<update with S3 bucket name>
GA_TRACKER=<update with Google Analytics tracker>
MIXPANEL_TRACKER=<update with mixpanel tracker>
API_URL=<update with api url.  Include http:// or https://>
```
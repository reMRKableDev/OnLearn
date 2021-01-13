# OnLearn (POC) 🚀🚀🚀

![tests](https://github.com/reMRKableDev/OnLearn/workflows/tests/badge.svg) [![codecov](https://codecov.io/gh/reMRKableDev/OnLearn/branch/main/graph/badge.svg?token=8IAKVRS55T)](https://codecov.io/gh/reMRKableDev/OnLearn) [![CodeFactor](https://www.codefactor.io/repository/github/remrkabledev/onlearn/badge)](https://www.codefactor.io/repository/github/remrkabledev/onlearn) [![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=alert_status)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=security_rating)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=sqale_index)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=reMRKableDev_OnLearn&metric=bugs)](https://sonarcloud.io/dashboard?id=reMRKableDev_OnLearn) [![time tracker](https://wakatime.com/badge/github/reMRKableDev/OnLearn.svg)](https://wakatime.com/badge/github/reMRKableDev/OnLearn) 

A simple online Learning Management System (LMS) built with Node.js. 

This project isn't production-ready. At best it is a Proof Of Concept (POC).

**Important links to check out**

1. You can find the project's kanban board [here](https://github.com/reMRKableDev/OnLearn/projects/1)

2. You can find the mockup [here](https://www.figma.com/file/7DxTkysjJFUCjcTs9AsbLp/OnLearn-Mockup?node-id=201%3A5189)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
NPM / Yarn
Code Editor (This app was built on VSCode)
Git
Cloudinary Account
OAuth 2.0 Clients (Google API)
```

**Cloudinary**

Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery.

All images and/or videos uploaded within this app are stored in a cloudinary account. You will need to create your account if you want to properly test this functionality out locally. 
```
Setup: 

1.  Create an account at [Cloudinary](https://cloudinary.com/).

2.  Navigate to your Cloudinary dashboard to find the variables you will later need to add to the .env file (See How To Use section below)
```

**Google API (OAuth 2.0)**

Google APIs are application programming interfaces developed by Google which allow communication with Google Services and their integration to other services.

The authentication process of this application utilizes Passport's [Local](http://www.passportjs.org/packages/passport-local/) and [Google Strategy](http://www.passportjs.org/docs/google/). 

In order for Google to identify which application's Passport interacts with their API, you will need to obtain clientID and clientSecret in [Google Developers Console](https://console.developers.google.com). You may refer to this [guide](https://developers.google.com/adwords/api/docs/guides/authentication#create_a_client_id_and_client_secret) for the steps.


### Installing

To get this project on your local machine, you first need to clone it using the `git clone` command.

```
git clone https://github.com/reMRKableDev/OnLearn
```

Running this on your terminal will ensure you receive the latest version with all it's changes.

Once you've cloned it, install all dependencies using:

```
npm install
```

This should retrieve all the necessary dependencies named in the [package.json](https://github.com/reMRKableDev/OnLearn/blob/main/package.json) file.

### How To Use:

Once dependencies are installed, be sure to include a ```.env``` file with the necessary environment variable:

```
LOCAL_MONGO_URI = <mongodb uri goes here...>
SESSION_SECRET = <session secret goes here...>
PORT = <port number goes here...>

DUMMY_PASSWORD = <custom dummy pwd goes here...>
DUMMY_EDIT_PASSWORD_WEAK = <custom weak dummy pwd goes here...>
DUMMY_EDIT_PASSWORD_STRONG = <custom strong dummy pwd goes here...>

GOOGLE_CLIENT_ID = <your google client id goes here...>
GOOGLE_CLIENT_SECRET = <your google client secret goes here...>

CLOUDINARY_NAME = <your cloudinary name goes here...>
CLOUDINARY_KEY = <your cloudinary key goes here...>
CLOUDINARY_SECRET = <your cloudinary secret goes here...>
```

When everything is in place, the application can be run locally using:

```
npm run dev
```

## Running tests 🧪

The testing framework utilized is Jest. Tests can be run by using the command:

```
npm test

OR

npm run test
```

To run tests and see the code coverage. RUn using the command:
```
npm run coverage
```

## Contributing 👋

If you would like to contribute to this repository, follow the guidelines provided in the [CONTRIBUTING.md](https://github.com/reMRKableDev/OnLearn/blob/main/CONTRIBUTING.md) file.

## Code Of Conduct 📋

Please note that there is a [CODE_OF_CONDUCT.md](https://github.com/reMRKableDev/OnLearn/blob/main/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Authors 💻

- **Malcolm R. Kente** - _Initial work_ - [reMRKable Dev](https://remrkabledev.com/)

## Acknowledgments 🗣️

The initial inspirations for this project are:

 - The [hypatia](https://github.com/gazpachu/hypatia) project by [Gazpachu(Joan Mira)](https://github.com/gazpachu)
 - The [node-lms](https://github.com/Luci-Lawless/node-lms) project by [Luci-Lawless](https://github.com/Luci-Lawless).
 - The [node-lms](https://github.com/edwinmah/node-lms) project by [EdwinMah](https://github.com/edwinmah).
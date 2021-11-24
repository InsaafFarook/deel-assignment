# deel-assignment
Automation assignment using Cyptess

# cypress-assignment
Cypress assignment using JScript

## Table of Contents
1. [Introduction](#Introduction)
2. [Structure](#Structure)
3. [Reportins](#Reporting)
4. [Execution](#TestExecution)

# Introduction
This repository contains **Sign Up related test scenarios** of Miro which are automated using [Cypress](https://www.cypress.io).

| Item | Description | 
| --- |---|
| **Test Type** | End-to-End Tests |
| **Technologies** | ![Cypress](https://img.shields.io/badge/cypress-^6.8.0-red.svg?style=plastic&logo=cypress) |
| **Dependencies** | Cypress Allure Plugin |
| | |

# Structure
There are 5 main folders inside cypress folder.

## fixtures
All test data required for the tests are placed here.

## integration
All the test files are placed here. Based on modules can organize the test files.

## lib
There are 4 sub folders under lib.
  - functions : Application specific functions to be placed here. These methods will be used in the test layer.
  - helpers : Application domain specific helper methods to be placed here. Such as generating session cookie, retreive data from external apis and etc.
  - pages : Application page specific elements and methods to be placed here.
  - utils : Utlity functions like currency conversions, date/time conversions can be placed here.

## plugins
Plugins that needed to be placed here

## support
Custom cypress commands to be placed here. Domain specific commands should not be placed here

# Reporting
Cypress-allure-plugin(https://github.com/Shelex/cypress-allure-plugin) is used for reporting. It is required to install allure plugin.

Upon test execution completion allure-report folder will be generated. Open index.html with live server and it would show the test execution results in details.

## Why Alluere Reporting
  - Allure reports provide great presentational diagrams
  - Easy to install
  - Clear and nice reporting UI
  - Can easily investigate test runs

# Execution
Tests can be executed with below command.
```
$ npm test
```

The scripts are defined in package.json.
```
"scripts": {
    "cy:run" : "npx cypress run --env allure=true",
    "allure:report" : "allure generate allure-results --clean -o allure-report",
    "allure:clear" : "if [ -d 'allure-results' ]; then rm -Rf allure-results; fi && if [ -d 'allure-report' ]; then rm -Rf allure-report; fi && if [ -d 'cypress/screenshots' ]; then rm -Rf cypress/screenshots; fi && if [ -d 'cypress/videos' ]; then rm -Rf cypress/videos; fi",
    "pretest": "npm run allure:clear",
    "test" : "npm run cy:run || npm run posttest",
    "posttest": "npm run allure:report"  
  }
```

allure:clear command here works with Linux, to make it work with MAC, windows please update the command as required.

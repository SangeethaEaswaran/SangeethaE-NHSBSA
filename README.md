Description: This project tests functional accessibilty , accessibility and compatibility of https://www.jobs.nhs.uk/candidate/search using webdriverio , javascript and cucumber BDD

Pre-requisites:
Download and install  
- node.js  v20.13.1  https://nodejs.org/en/download/
- npm version- v10.5.2 ( will be installed along with node )
- IDE of choice (VScode- https://code.visualstudio.com/download) 

Instructions:
From the command line terminal 
- git clone https://github.com/SangeethaEaswaran/SangeethaE-NHSBSA.git 
- cd SangeethaE-NHSBSA
- npm install 
- run tests using below CLI commands 
    - npm run smoke 
    - npm run regression
    - npm run accessibility

Reporting :
Test results are viewed on console 

1 BDD best practices followed 
Test runs in the framework doesnt need a downloaded or machine based driver instead uses the automated setup of driver binaries from webdriverio- https://webdriver.io/docs/driverbinaries

# DMONEY API TESTING WITH POSTMAN AND NEWMAN

## Project Summary 
This project automate Dmoney user's API and Transaction API using Postman and Newman.

## Technology Used -
- Postman
- Newman

## Pre requisites :
- Node.js

## How to run :
- git clone
- npm i 
- npm test 
A report will generate in your project source root

## Scenarios :
1. Admin creates an agent and random 2 customers. Admin email: admin@roadtocareer.net/ Pass: 1234
2. Deposit some money from SYSTEM account to the agent. System account: SYSTEM / Pass: 1234
(range 10 tk to 10000 tk)
3. Agent deposit to any of 1 customer
4. Check agent balance
5. Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
6. Then the customer checks balance
7. Then send money to the other customer
8. Then from the another customer payment to this merchant: 01686606905
9. Then the second customer will check both balance and statement
10. Then the merchant will check his own balance

## TestCases :


## API Documentation :
https://documenter.getpostman.com/view/27579717/2s93sW8agF

## Bug Report :


## Newman Report :
![newmanDmoney_Report](https://github.com/ShreyaChakma/Dmoney-API-Testing-Postman-Newman/assets/53483111/e1650ef5-c82a-492f-b474-ebb27996b44c)


# Task

We would like to kick off the process with a little challenge. Whenever you submit your answer, we will give you our honest feedback. If your solution is good we will get to the next steps.

Here we go:
Imagine yourself as a member of dev team in Physitrack. Your task is to write a frontend automated test in a language and framework of your choice which covers the following scenario:

## Preconditions:

You are testing a demo account flow

- Open https://www.physitrack.co.uk/ 
- Pick *Login* 
- Pick *USA* as your country 
- Add *Bird dog* to an exercise plan 
- Assign plan to Demo patient 
- Validate if program was assigned to Demo patient

## Expected result:
 - Script can be executed via command line on CI server
 - All dependencies are automatically pulled

## Points to focus on:
- Publish the code as a GitHub or a private Bitbucket repo
- Adding a new test scenario should be easy
- Code should be readable and elements should be reusable in next tests
- Code should run on any OS
- Test must work on first run
    
If you have any questions, we are here to help.


To run Tests:
npm install
npm run tests
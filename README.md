## Prerequisite

- [Cypress](https://www.toolsqa.com/cypress/what-is-cypress/)
- Node v12 or above

## How to install
- Clone the repo
- Run `npm install` to install plugin into your local

## Usage
### Run test
- Before running test, use `npm run pretest` to clear data from previous run
- If you want to run all test suite, use `npm run test` 
- If you want to run specific spec, use `npx cypress run --spec ./cypress/integration/features/sign_in_add_new_task.feature`
- After running test successfully, use `npm run post-test` to generate report
- Use `npm run open-report` to open report after generating report successfully
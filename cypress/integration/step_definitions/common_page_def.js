import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonPage from '../../integration/page_object/common_page_object'

const commonPage = new CommonPage()
const globalVariables = require("../../integration/commons/global_variables");

Given(/^Navigate to application$/, () => {
    commonPage.navigateTo(globalVariables.url)
});

When(/^Click to 'New task' button$/, () => {
    commonPage.clickToNewTaskButton()
});

When(/^Click to arrow of 'TASKS' menu$/, () => {
    commonPage.clickToTasksButton()
});

Then(/^Verify Homepage displays$/, () => {
    commonPage.verifyHomeMenuDisplay()
});
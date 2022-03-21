import {When} from "cypress-cucumber-preprocessor/steps"
import NewTaskPage from '../../integration/page_object/new_task_page_object'

const newTaskPage = new NewTaskPage() 

// Enter to textbox
When(/^Enter "([^"]*)" to 'Subject' textbox$/, (sub) => {
    newTaskPage.enterValueToSubject(sub)
});

When(/^Enter "([^"]*)" to 'Description' textbox$/, (des) => {
    newTaskPage.enterValueToDes(des)
});

//Click
When(/^Click to 'Save' button$/, () => {
    newTaskPage.clickToSaveButton()
});

//Verify
Then(/^Verify Subject "([^"]*)" and Description "([^"]*)" displays on Details page$/, (sub,des) => {
    newTaskPage.verifySubTitleDisplay(sub)
    newTaskPage.verifyDesDisplay(des)
});
import {When} from "cypress-cucumber-preprocessor/steps"
import SignInPage from '../../integration/page_object/sign_in_page_object'

const signInPage = new SignInPage() 

// Enter to textbox
When(/^Enter "([^"]*)" to 'Email' textbox$/, (email) => {
    signInPage.enterValueToEmail(email)
});

When(/^Enter "([^"]*)" to 'Password' textbox$/, (pass) => {
    signInPage.enterValueToPassword(pass)
});

When(/^Click to 'Login' button$/, () => {
    signInPage.clickToLoginButton()
});
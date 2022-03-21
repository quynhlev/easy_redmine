import SignInPageLocator from '../../integration/page_ui/sign_in_page_ui'
import CommonAction from '../../integration/commons/common_action'

const signInPageLocator = new SignInPageLocator()
const commonAction = new CommonAction()

class SignInPage{
    //enterValueToTextbox
    enterValueToEmail(value){
        commonAction.enterValueToTextboxByCss(signInPageLocator.email_txb_css, value)
    }

    enterValueToPassword(value){
        commonAction.enterValueToTextboxByCss(signInPageLocator.password_txb_css, value)
    }

    clickToLoginButton(){
        commonAction.clickToElementByCss(signInPageLocator.login_btn_css)
    }

} export default SignInPage
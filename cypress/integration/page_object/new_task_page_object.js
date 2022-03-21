import NewTaskPageLocator from '../../integration/page_ui/new_task_page_ui'
import CommonAction from '../../integration/commons/common_action'

const newTaskPageLocator = new NewTaskPageLocator()
const commonAction = new CommonAction()
var printf = require('printf')

class NewTaskPage{
    //enterValueToTextbox
    enterValueToSubject(value){
        commonAction.enterValueToTextboxByXpath(newTaskPageLocator.subject_txb_xpath, value)
    }

    enterValueToDes(value){
        commonAction.enterValueToTextboxByXpath(newTaskPageLocator.description_textarea_xpath, value)
    }

    //click
    clickToSaveButton(){
        commonAction.clickToElementByXpathWithIndex(newTaskPageLocator.save_btn_xpath,1)
    }

    //verify
    verifySubTitleDisplay(sub){
        commonAction.verifyElementVisible(printf(newTaskPageLocator.subject_title_xpath,sub))
    }

    verifyDesDisplay(des){
        commonAction.verifyElementVisible(printf(newTaskPageLocator.des_xpath,des))
    }

} export default NewTaskPage
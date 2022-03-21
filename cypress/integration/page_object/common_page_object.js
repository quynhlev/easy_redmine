import CommonPageLocator from '../../integration/page_ui/common_page_ui'
import CommonAction from '../../integration/commons/common_action'

const commonPageLocator = new CommonPageLocator()
const commonAction = new CommonAction()

class CommonPage {
    //click action
    clickToNewTaskButton(){
        commonAction.clickToElementByXpathWithIndex(commonPageLocator.new_task_button_xpath,1)
    }

    clickToTasksButton(){
        commonAction.clickToElementByXpath(commonPageLocator.tasks_arrow_button_xpath)
    }

    //visit link
    navigateTo(url){
        commonAction.navigateTo(url)
    }

    //verify
    verifyHomeMenuDisplay(){
        commonAction.verifyElementVisible(commonPageLocator.home_menu_xpath)
    }
} export default CommonPage
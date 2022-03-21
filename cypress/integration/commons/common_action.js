import 'cypress-file-upload';

class BaseAction {
    clickToElementByXpath(xpath){
        cy.xpath(xpath).click()
    }

    clickToElementByCss(css){
        cy.get(css).click()
    }

    clickToElementByXpathWithIndex(xpath,index){
        cy.xpath(xpath).eq(index).click()
    }

    enterValueToTextboxByCss(css, value){
        cy.get(css).clear()
        cy.get(css).type(value)
    }

    enterValueToTextboxByXpath(xpath, value){
        cy.xpath(xpath).clear()
        cy.xpath(xpath).type(value)
    }

    navigateTo(url){
        cy.visit(url)
    }

    verifyElementVisible(xpath){
        cy.xpath(xpath).should('be.visible')
    }
}
export default BaseAction
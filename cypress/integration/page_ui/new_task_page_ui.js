class NewTaskPageLocator {
    constructor(){
        //textbox
        this.subject_txb_xpath = "//input[@id='issue_subject']";
        this.description_textarea_xpath = "//p[@data-placeholder='Description']/parent::div";
        this.save_btn_xpath = "//input[@name='commit']"
        this.subject_title_xpath = "//span[@data-name='issue[subject]' and text()='%s']"
        this.des_xpath = "//p[text()='%s']"
    } 
}
export default NewTaskPageLocator
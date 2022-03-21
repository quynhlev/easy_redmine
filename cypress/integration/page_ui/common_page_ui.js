class CommonPageLocator {
    constructor() {
        this.home_menu_xpath = "//a[@title='Home']"
        this.tasks_arrow_button_xpath = "//a[@title='Tasks']/following-sibling::span[@class='easy-top-menu-more-toggler w-toggleable']"
        this.new_task_button_xpath = "//a[@aria_label='New task']"
    }
}
export default CommonPageLocator
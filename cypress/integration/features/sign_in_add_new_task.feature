Feature: Sign in and add new task

Scenario: Sign in and add new task
    When Navigate to application
    And Enter "qa-applicant@easy.cz" to 'Email' textbox
    And Enter "test1234" to 'Password' textbox
    And Click to 'Login' button
    Then Verify Homepage displays

    When Click to arrow of 'TASKS' menu
    And Click to 'New task' button
    And Enter "test sub 1" to 'Subject' textbox
    And Enter "test des 1" to 'Description' textbox
    And Click to 'Save' button
    Then Verify Subject "test sub 1" and Description "test des 1" displays on Details page
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ui/Login.feature");
formatter.feature({
  "name": "Test Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "Launch the browser and navigate to login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the swaglabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheFirmexHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the login page title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.iVerifyHomePageTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UI - Login as a standard user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I login to the application as a standard user",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdefs.iLoginToTheApplicationAsAStandardUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate user is on the Inventory page",
  "keyword": "And "
});
formatter.match({
  "location": "InventoryPageSteps.i_navigate_to_the_Inventory_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate add to cart functionality is working fine",
  "keyword": "Then "
});
formatter.match({
  "location": "InventoryPageSteps.i_validate_add_to_cart_functionality_is_working_fine()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Launch the browser and navigate to login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the swaglabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheFirmexHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the login page title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.iVerifyHomePageTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UI - Login as a Locked out user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I login to the application as a locked_out user",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdefs.iLoginToTheApplicationAsAStandardUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the user is locked out",
  "keyword": "Then "
});
formatter.match({
  "location": "InventoryPageSteps.iValidateTheUserIsLockedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Launch the browser and navigate to login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the swaglabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheFirmexHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the login page title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.iVerifyHomePageTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UI - Login as a Problem user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I login to the application as a problem user",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdefs.iLoginToTheApplicationAsAStandardUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate user is on the Inventory page",
  "keyword": "And "
});
formatter.match({
  "location": "InventoryPageSteps.i_navigate_to_the_Inventory_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate add to cart functionality is not working fine",
  "keyword": "Then "
});
formatter.match({
  "location": "InventoryPageSteps.iValidateAddToCartFunctionalityIsNotWorkingFine()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Launch the browser and navigate to login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the swaglabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheFirmexHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the login page title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.iVerifyHomePageTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UI - Login as a performance glitch user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I login to the application as a performance_glitch_user user",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdefs.iLoginToTheApplicationAsAStandardUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the pages are loading slowly",
  "keyword": "Then "
});
formatter.match({
  "location": "InventoryPageSteps.iValidateThePagesAreLoadingSlowly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Launch the browser and navigate to login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the swaglabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheFirmexHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the login page title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.iVerifyHomePageTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UI - Login test with Invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I enter invalid credentials and click login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepdefs.iEnterValidCredentials(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iSeeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
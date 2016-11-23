$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test login  with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login--with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login--with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenario;test-login--with-valid-credentials;;1"
    },
    {
      "cells": [
        "wuikhan@gmail.com",
        "Pakistan1"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenario;test-login--with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login  with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login--with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid \"wuikhan@gmail.com\" and valid \"Pakistan1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 4132986485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wuikhan@gmail.com",
      "offset": 17
    },
    {
      "val": "Pakistan1",
      "offset": 47
    }
  ],
  "location": "SmokeTest.i_enter_a_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 1234637942,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 147468407,
  "status": "passed"
});
});
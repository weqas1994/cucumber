Feature: Test facebook smoke scenario
	
	
	Scenario Outline: Test login  with valid credentials
		Given open firefox and start application
		When I enter a valid "<username>" and valid "<password>"
		Then user should be able to login successfully
		
	Examples:
		| username|password|
		| wuikhan@gmail.com | hello123 |


	
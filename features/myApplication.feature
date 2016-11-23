Feature: Test facebook smoke scenario
	
	
	Scenario: Test login  with valid credentials
		Given open firefox and start application
		When I enter a valid username and password
		Then user should be able to login successfully


	
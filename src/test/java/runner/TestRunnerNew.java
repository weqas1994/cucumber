package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="features",
		glue="stepDefinition",
		plugin={"html:target/cucumber-html-report"}
		)
//this is a note for all of us
public class TestRunnerNew {

}

package stepDefinition;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	WebDriver driver;
	
	
	@Given("^open firefox and start application$")
	public void open_firefox_and_start_application() {
	    
		//File src = new File("/Users/eKuber30/Downloads/phantomjs-2.1.1-macosx/bin/phantomjs");
		//System.setProperty("phantomjs.binary.path", src.getAbsolutePath());
		//driver=new PhantomJSDriver();
		
		driver=new FirefoxDriver();
		
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");
	}
	
	@When("^I enter a valid username and password$")
	public void i_enter_a_valid_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("email")).sendKeys("email");
	    driver.findElement(By.id("pass")).sendKeys("password");
	    driver.findElement(By.id("loginbutton")).click();
	    String title = driver.getTitle();
	    System.out.println(title);
	    System.out.println("email and password enterred");
	}
	
	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.quit();
	   System.out.println("driver closed");
	}
	
	
	}
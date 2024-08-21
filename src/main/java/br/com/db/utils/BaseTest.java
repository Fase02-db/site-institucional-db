package br.com.db.utils;

import br.com.db.webdrivers.BrowserEnum;
import br.com.db.webdrivers.DriverFactory;
import br.com.db.webdrivers.DriverManager;
import com.aventstack.extentreports.testng.listener.ExtentITestListenerClassAdapter;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Listeners;

@Listeners({ExtentITestListenerClassAdapter.class, Report.class})
public class BaseTest {

    @BeforeTest
    public void setUp() {
        WebDriver driver = DriverFactory.createInstance(BrowserEnum.CHROME);
        DriverManager.setDriver(driver);
        driver.manage().window().maximize();
        driver.get(Property.get("url"));
    }

    @AfterTest
    public void tearDown() {
        DriverManager.quitDriver();
    }
}
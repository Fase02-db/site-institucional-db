package br.com.db.testcases;

import br.com.db.utils.BaseTest;
import br.com.db.utils.LoggerFactory;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class TestCase extends BaseTest {

    private WebDriver driver() {
        return DriverManager.getDriver();
    }

    @Test
    public void test() {

    }
}
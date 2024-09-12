package br.com.db.pageobjects.clientespageobject;

import br.com.db.utils.WaitElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ValidarAPaginaClientesPageObject {
    private final WaitElement waitElement;

    public ValidarAPaginaClientesPageObject(WebDriver driver) {
        waitElement = new WaitElement(driver);
    }

    public WebElement clientesButton() {
        return waitElement.toBeClickable(By.cssSelector("#root ul li:nth-child(3) span a"));
    }
}
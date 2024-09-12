package br.com.db.pageobjects.homepageobject;

import br.com.db.utils.WaitElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ValidarAPaginaInicialPageObject {
    private final WaitElement waitElement;

    public ValidarAPaginaInicialPageObject(WebDriver driver) {
        waitElement = new WaitElement(driver);
    }

    public WebElement elementDoTituloDaPaginaLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div header p"));
    }

    public WebElement subtituloDeSobreAABCLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root .sc-cEzcPc.jeufEV h4"));
    }

    public WebElement subtituloDeNoticiasDaMidiaLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root .sc-fFoeYl.hExqCz h4"));
    }

    public WebElement subtituloDeEntreEmContatoLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div.sc-gQaihK.gQkjej h1"));
    }
}
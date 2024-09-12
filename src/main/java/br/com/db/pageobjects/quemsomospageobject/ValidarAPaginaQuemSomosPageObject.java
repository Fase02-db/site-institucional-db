package br.com.db.pageobjects.quemsomospageobject;

import br.com.db.utils.WaitElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ValidarAPaginaQuemSomosPageObject {
    private final WaitElement waitElement;

    public ValidarAPaginaQuemSomosPageObject(WebDriver driver) {
        waitElement = new WaitElement(driver);
    }

    public WebElement quemSomosNoTopoButton() {
        return waitElement.toBeClickable(By.cssSelector("#root li:nth-child(1) a"));
    }

    public WebElement validarOtituloDeSomosUmaEmpresaLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div h1"));
    }

    public WebElement subtituloDeSobreAABCLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-fIfZzT.yWqmQ h4"));
    }

    public WebElement subtituloDeDesenvolvimentoDeSoftwareLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-jdeYMN.bZAoDk div:nth-child(1) :nth-child(1) h4"));
    }

    public WebElement subtituloDeMetodologiaAgilLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-jdeYMN.bZAoDk > div:nth-child(2) div:nth-child(1) h4"));
    }

    public WebElement subtituloDeQualidadeLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-jdeYMN.bZAoDk > div:nth-child(3) div:nth-child(1) h4"));
    }

    public WebElement tituloDeNossosBeneficiosLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div.sc-gqYRWL.fzJFWm h2"));
    }

    public WebElement subtituloDeQualidadeNoNossosBeneficiosLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div.sc-gqYRWL.fzJFWm div div:nth-child(1) div h3"));
    }

    public WebElement subtituloMetodosAgeisLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div.sc-gqYRWL.fzJFWm div div div:nth-child(2) div h3"));
    }

    public WebElement subtituloDesignThinkingLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div.sc-gqYRWL.fzJFWm div div:nth-child(3) div h3"));
    }

    public WebElement subtituloSuporteLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div.sc-gqYRWL.fzJFWm div:nth-child(4) div h3"));
    }
}
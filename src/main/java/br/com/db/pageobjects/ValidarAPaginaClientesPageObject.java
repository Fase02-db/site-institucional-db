package br.com.db.pageobjects;

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

    public WebElement tituloNosFazemosADiferencaLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root header h1"));
    }

    public WebElement subtituloCaseDeSucessoLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root header > h4"));
    }

    public WebElement subtituloNoCardCaseVarejoLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div:nth-child(1) div.ant-card-body div:nth-child(1) h4"));
    }

    public WebElement subtituloNoCardCaseSetorPetLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section > div:nth-child(2) div:nth-child(1) h4"));
    }

    public WebElement subtituloNoCardCaseFinancasLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section > div:nth-child(3) div:nth-child(1) h4"));
    }

    public WebElement tituloCOnhecaAlgunsClientesLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-hGZxvd.kOWylu div.sc-iRLAEC.cFWTYe h4"));
    }

    public WebElement tituloNossosBeneficiosLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bnGbuY.dmqsEy h2"));
    }

    public WebElement subtituloQualidadeLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bnGbuY.dmqsEy div:nth-child(1) > div > h3"));
    }

    public WebElement subtituloMetodosAgeis() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bnGbuY.dmqsEy div:nth-child(2) > div > h3"));
    }

    public WebElement subtituloDesginThinkingLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bnGbuY.dmqsEy div:nth-child(3) > div > h3"));
    }

    public WebElement subtituloSuporteLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bnGbuY.dmqsEy div:nth-child(4) > div > h3"));
    }
}
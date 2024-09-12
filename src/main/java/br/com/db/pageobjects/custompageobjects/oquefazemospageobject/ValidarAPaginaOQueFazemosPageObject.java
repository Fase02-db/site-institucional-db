package br.com.db.pageobjects.custompageobjects.oquefazemospageobject;

import br.com.db.utils.WaitElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ValidarAPaginaOQueFazemosPageObject {
    private final WaitElement waitElement;

    public ValidarAPaginaOQueFazemosPageObject(WebDriver driver) {
        waitElement = new WaitElement(driver);
    }

    public WebElement oQueFazemosButton() {
        return waitElement.toBeClickable(By.cssSelector("#root li:nth-child(2) span a"));
    }

    public WebElement tituloCasePetLoveLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-fwzISk.fzGGCy h1"));
    }

    public WebElement tituloServicoOferecidosLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-epnzzT.kLXgak div h2"));
    }

    public WebElement subtituloMetodosAgeisLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-epnzzT.kLXgak > div > div >div:nth-child(1) h3"));
    }

    public WebElement subtituloScrumLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-epnzzT.kLXgak > div > div > div:nth-child(2) h3"));
    }

    public WebElement subtituloTransformacaoDigitalLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-epnzzT.kLXgak > div > div > div:nth-child(3) h3"));
    }

    public WebElement subtituloQualidadeLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-epnzzT.kLXgak > div > div > div:nth-child(4) h3"));
    }

    public WebElement tituloDoCardServicoOferecidosLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root > div > div h4"));
    }

    public WebElement subtituloDoCardDesginThinkLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root div:nth-child(1) div:nth-child(1) h4"));
    }

    public WebElement subtituloDoCardIAnaVeterinariaLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bMTdWJ.QrQYS > div:nth-child(2) div:nth-child(1) h4"));
    }

    public WebElement subtituloDoCardBemEstarPetLabel() {
        return waitElement.visibilityOf(By.cssSelector("#root section.sc-bMTdWJ.QrQYS > div:nth-child(3) div:nth-child(1) h4"));
    }
}

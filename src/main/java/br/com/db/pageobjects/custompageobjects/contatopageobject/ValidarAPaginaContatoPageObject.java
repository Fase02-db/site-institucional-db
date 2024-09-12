package br.com.db.pageobjects.custompageobjects.contatopageobject;

import br.com.db.utils.WaitElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ValidarAPaginaContatoPageObject {
    private final WaitElement waitElement;

    public ValidarAPaginaContatoPageObject(WebDriver driver) {
        waitElement = new WaitElement(driver);
    }

    public WebElement contatoButton() {
        return waitElement.toBeClickable(By.cssSelector("#root li:nth-child(4) a"));
    }

    public WebElement tituloNossosEnderecosLabel() {
        return waitElement.visibilityOf(By.cssSelector("#principal div.sc-dEkLRj.iYxkHP h1"));
    }

    public WebElement tituloCidadeRSLabel() {
        return waitElement.visibilityOf(By.cssSelector("#principal div.sc-dhCplO.ekMCFT div:nth-child(1) h1"));
    }

    public WebElement tituloCidadeSPLabel() {
        return waitElement.visibilityOf(By.cssSelector("#principal div.sc-dhCplO.ekMCFT div:nth-child(2) h1"));
    }

    public WebElement tituloEntreEmContatoLabel() {
        return waitElement.visibilityOf(By.cssSelector("#principal div.sc-eWPXlR.euxXCR h1"));
    }

    public static class EntreEmContatoPageObject {
        private final WaitElement wait;

        public EntreEmContatoPageObject(WebDriver driver) {
            wait = new WaitElement(driver);
        }

        public WebElement nomeDoUsuarioEntreEmContatoTextField() {
            return wait.toBeClickable(By.xpath("*//div[@id='root'] //input[@placeholder='Nome']"));
        }

        public WebElement emailDoUsuarioEntreEmContatoTextField() {
            return wait.toBeClickable(By.xpath("*//div[@id='root'] //input[@placeholder='E-mail']"));
        }

        public WebElement telefoneDoUsuarioEntreEmContatoTextField() {
            return wait.toBeClickable(By.xpath("*//div[@id='root'] //input[@placeholder='Telefone']"));
        }

        public WebElement assuntoDoUsuarioEntreEmContatoTextField() {
            return wait.toBeClickable(By.xpath("*//div[@id='root'] //input[@placeholder='Assunto']"));
        }

        public WebElement mensagemEntreEmContatoTextField() {
            return wait.toBeClickable(By.xpath("*//div[@id='root'] //textarea[@placeholder='Mensagem']"));
        }

        public WebElement enivarButton() {
            return wait.toBeClickable(By.xpath("*//div[@id='root'] //button[@type='button']"));
        }
    }
}
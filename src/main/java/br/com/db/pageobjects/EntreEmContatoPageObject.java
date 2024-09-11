package br.com.db.pageobjects;

import br.com.db.utils.WaitElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class EntreEmContatoPageObject {
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
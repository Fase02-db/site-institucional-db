package br.com.db.steps;

import br.com.db.pageobjects.EntreEmContatoPageObject;
import com.github.javafaker.Faker;
import org.openqa.selenium.WebDriver;

public class EntreEmContatoStep {
    private final EntreEmContatoPageObject entreEmContatoPageObject;
    private final Faker faker;

    public EntreEmContatoStep(WebDriver driver) {
        entreEmContatoPageObject = new EntreEmContatoPageObject(driver);
        faker = new Faker();
    }

    public void preencherEEnviarOsFormulariosEmContato() {
        preencherOsCampos();
    }

    private void preencherOsCampos() {
        entreEmContatoPageObject.nomeDoUsuarioEntreEmContatoTextField().sendKeys(faker.name().name());
        entreEmContatoPageObject.emailDoUsuarioEntreEmContatoTextField().sendKeys(faker.internet().emailAddress());
        entreEmContatoPageObject.telefoneDoUsuarioEntreEmContatoTextField().sendKeys(faker.phoneNumber().cellPhone());
        entreEmContatoPageObject.assuntoDoUsuarioEntreEmContatoTextField().sendKeys("Test");
        entreEmContatoPageObject.mensagemEntreEmContatoTextField().sendKeys("Testado");
    }
}
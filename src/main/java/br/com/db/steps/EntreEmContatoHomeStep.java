package br.com.db.steps;

import br.com.db.pageobjects.EntreEmContatoPageObject;
import br.com.db.utils.Report;
import com.aventstack.extentreports.Status;
import com.github.javafaker.Faker;
import org.openqa.selenium.WebDriver;

import java.util.Locale;

public class EntreEmContatoHomeStep {
    private final EntreEmContatoPageObject entreEmContatoPageObject;
    private final Faker faker;

    public EntreEmContatoHomeStep(WebDriver _driver) {
        entreEmContatoPageObject = new EntreEmContatoPageObject(_driver);
        faker = new Faker(new Locale("pt-BR"));
    }

    public void preencherEEnviarOsFormulariosEmContato() {
        preencherOsCampos();
    }

    private void preencherOsCampos() {
        Report.log(Status.INFO, "Preencho nos campos de entre em contato.");
        entreEmContatoPageObject.nomeDoUsuarioEntreEmContatoTextField().sendKeys(faker.name().name());
        entreEmContatoPageObject.emailDoUsuarioEntreEmContatoTextField().sendKeys(faker.internet().emailAddress());
        entreEmContatoPageObject.telefoneDoUsuarioEntreEmContatoTextField().sendKeys(faker.phoneNumber().cellPhone());
        entreEmContatoPageObject.assuntoDoUsuarioEntreEmContatoTextField().sendKeys("Test");
        entreEmContatoPageObject.mensagemEntreEmContatoTextField().sendKeys("Testado");
        validarOBotaoDeEnivar();
    }

    private void validarOBotaoDeEnivar() {
        if (!entreEmContatoPageObject.enivarButton().isSelected()) {
            entreEmContatoPageObject.enivarButton().click();
            Report.log(Status.PASS, "O botão recebeu um clique");
            return;
        }
        Report.logCapture(Status.FAIL, "O botao não recebeu um clique");
    }
}
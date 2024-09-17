package br.com.db.testcases;

import br.com.db.steps.EntreEmContatoStep;
import br.com.db.utils.BaseTest;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class EntreEmContatoPageContatoTestCase extends BaseTest {
    private WebDriver driver() {
        return DriverManager.getDriver();
    }

    @Test(
            description = "Preencho os campos na seção 'entre em contato' da pagina contato.",
            groups = {"web", "contato"},
            priority = 1
    )
    public void preencherOsFormulariosNaEntreEmContato() {
        EntreEmContatoStep entreEmContatoStep = new EntreEmContatoStep(driver());
        entreEmContatoStep.preencherEEnviarOsFormulariosEmContato();
    }
}
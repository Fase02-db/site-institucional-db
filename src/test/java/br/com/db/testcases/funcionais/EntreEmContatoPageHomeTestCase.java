package br.com.db.testcases.funcionais;

import br.com.db.steps.EntreEmContatoHomeStep;
import br.com.db.utils.BaseTest;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class EntreEmContatoPageHomeTestCase extends BaseTest {

    private WebDriver driver() {
        return DriverManager.getDriver();
    }

    @Test(
            description = "Preencho os campos na seção 'entre em contato' da pagina inicial.",
            groups = {"web", "home"},
            priority = 1
    )
    public void preencherOsFormulariosNaEntreEmContato() {
        EntreEmContatoHomeStep entreEmContatoStep = new EntreEmContatoHomeStep(driver());
        entreEmContatoStep.preencherEEnviarOsFormulariosEmContato();
    }
}
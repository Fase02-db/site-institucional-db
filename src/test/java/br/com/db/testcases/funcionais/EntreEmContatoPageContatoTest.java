package br.com.db.testcases.funcionais;

import br.com.db.steps.customsteps.contatostep.EntreEmContatoStep;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class EntreEmContatoPageContatoTest {
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
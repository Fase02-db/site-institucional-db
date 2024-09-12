package br.com.db.testcases.funcionais;

import br.com.db.utils.BaseTest;
import br.com.db.validations.pages.ValidarAPaginaStep;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class ValidarAsPaginasTestCase extends BaseTest {
    private WebDriver driver() {
        return DriverManager.getDriver();
    }

    @Test(
            description = "Validar o URL e da pagina inicial. ",
            groups = {"web"},
            priority = 1
    )
    public void validarAsPaginasTest() {
        ValidarAPaginaStep validarAPaginaStep = new ValidarAPaginaStep(driver());
        validarAPaginaStep.validarAPaginaInicial();
    }
}

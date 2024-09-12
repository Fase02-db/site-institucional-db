package br.com.db.testcases.funcionais;

import br.com.db.utils.BaseTest;
import br.com.db.steps.home.ValidarAPaginaStep;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class ValidarAsPaginasTestCase extends BaseTest {
    private WebDriver driver() {
        return DriverManager.getDriver();
    }

    @Test(
            description = "Validar a URL, o titulo e os subtitles na pagina inicial.",
            groups = {"web", "home"},
            priority = 1
    )
    public void ABCTechnologyHomeTest() {
        ValidarAPaginaStep validarAPaginaStep = new ValidarAPaginaStep(driver());
        validarAPaginaStep.validarAUrlDaPaginaInicial();
        validarAPaginaStep.validarOTituloEOsSubtitulosNaPagina();
    }
}
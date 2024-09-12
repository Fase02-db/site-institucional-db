package br.com.db.testcases.funcionais;

import br.com.db.steps.quemsomosstep.ValidarAPaginaQuemSomosStep;
import br.com.db.utils.BaseTest;
import br.com.db.steps.homestep.ValidarAPaginaInicialStep;
import br.com.db.webdrivers.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class ValidarAsPaginasTestCase extends BaseTest {
    private WebDriver driver() {
        return DriverManager.getDriver();
    }

    @Test(
            description = "Validar a URL, o titulo e os subtitles na pagina inicial.",
            groups = {"web", "home"}
    )
    public void PaginaInicialTest() {
        ValidarAPaginaInicialStep paginaInicialStep = new ValidarAPaginaInicialStep(driver());
        paginaInicialStep.validarOUrlDaPaginaInicial();
        paginaInicialStep.validarOTituloEOsSubtitulosNaPagina();
    }

    @Test(
            description = "Validar a URL, o titulo e os subtitles na pagina Quem somos.",
            groups = {"web", "quemsomos"}
    )
    public void paginaQuemSomosTest() {
        ValidarAPaginaQuemSomosStep quemSomosStep = new ValidarAPaginaQuemSomosStep(driver());
        quemSomosStep.validaOUrlDaPagina();
        quemSomosStep.validarOTituloEOsSubtitulosNaPagina();
    }
}
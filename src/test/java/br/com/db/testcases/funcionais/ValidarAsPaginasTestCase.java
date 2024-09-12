package br.com.db.testcases.funcionais;

import br.com.db.steps.clientesstep.ValidarAPaginaClientesStep;
import br.com.db.steps.oquefazemosstep.ValidarAPaginaOQueFazemosStep;
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
            groups = {"web", "home"},
            priority = 1
    )
    public void PaginaInicialTest() {
        ValidarAPaginaInicialStep paginaInicialStep = new ValidarAPaginaInicialStep(driver());
        paginaInicialStep.validarOUrlDaPaginaInicial();
        paginaInicialStep.validarOTituloEOsSubtitulosNaPagina();
    }

    @Test(
            description = "Validar a URL, o titulo e os subtitles na pagina Quem somos.",
            groups = {"web", "quemsomos"},
            priority = 2
    )
    public void paginaQuemSomosTest() {
        ValidarAPaginaQuemSomosStep quemSomosStep = new ValidarAPaginaQuemSomosStep(driver());
        quemSomosStep.validaOUrlDaPaginaQuemSomos();
        quemSomosStep.validarOTituloEOsSubtitulosNaPagina();
    }

    @Test(
            description = "Validar a URL, o titulo e os subtitles na pagina O que fazemos.",
            groups = {"web", "oquefazemos"},
            priority = 3
    )
    public void paginaOQueFazemosTest() {
        ValidarAPaginaOQueFazemosStep oQueFazemosStep = new ValidarAPaginaOQueFazemosStep(driver());
        oQueFazemosStep.validaOUrlDaPaginaOQueFazemos();
        oQueFazemosStep.validarOTituloEOsSubtitulosNaPagina();
    }

    @Test(
            description = "Validar a URL, o titulo e os subtitles na pagina Clientes.",
            groups = {"web", "clientes"},
            priority = 4
    )
    public void paginaClientesTest() {
        ValidarAPaginaClientesStep clientesStep = new ValidarAPaginaClientesStep(driver());
        clientesStep.validaOUrlDaPaginaClientes();
        clientesStep.validarOTituloEOsSubtitulosNaPagina();
    }
}
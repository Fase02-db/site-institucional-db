package br.com.db.steps.quemsomosstep;

import br.com.db.pageobjects.quemsomospageobject.ValidarAPaginaQuemSomosPageObject;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaQuemSomosStep {
    private final WebDriver driver;
    private final ValidarAPaginaQuemSomosPageObject validarAPaginaQuemSomosPageObject;

    public ValidarAPaginaQuemSomosStep(WebDriver _driver) {
        driver = _driver;
        validarAPaginaQuemSomosPageObject = new ValidarAPaginaQuemSomosPageObject(_driver);
    }

    public void validaOUrlDaPagina() {
        acessaNaPaginaQuemSomos();
        Assert.assertEquals("https://site-institucional-db-fork.vercel.app/quem-somos", driver.getCurrentUrl());
    }

    public void validarOTituloEOsSubtitulosNaPagina() {
        validarOTituloDaPagina();
        validarOTituloDeSomosUmaEmpresa();
        validarOSubtituloDeSobreABC();
        validarOsTitulosDosCardsNoCenterDaPagina();
        validarOsCardsDeNossosBeneficios();
    }

    private void acessaNaPaginaQuemSomos() {
        validarAPaginaQuemSomosPageObject.quemSomosNoTopoButton().click();
    }

    private void validarOTituloDaPagina() {
        Assert.assertEquals("ABC Technology", driver.getTitle());
    }

    private void validarOTituloDeSomosUmaEmpresa() {
        Assert.assertEquals("SOMOS UMA EMPRESA DE TECNOLOGIA.", validarAPaginaQuemSomosPageObject.validarOtituloDeSomosUmaEmpresaLabel().getText());
    }

    private void validarOSubtituloDeSobreABC() {
        Assert.assertEquals("Sobre a ABC", validarAPaginaQuemSomosPageObject.subtituloDeSobreAABCLabel().getText());
    }

    private void validarOsTitulosDosCardsNoCenterDaPagina() {
        Assert.assertEquals("Desenvolvimento de Software", validarAPaginaQuemSomosPageObject.subtituloDeDesenvolvimentoDeSoftwareLabel().getText());
        Assert.assertEquals("Metodologia Ágil", validarAPaginaQuemSomosPageObject.subtituloDeMetodologiaAgilLabel().getText());
        Assert.assertEquals("Qualidade", validarAPaginaQuemSomosPageObject.subtituloDeQualidadeLabel().getText());
    }

    private void validarOsCardsDeNossosBeneficios() {
        Assert.assertEquals("Nossos benefícios", validarAPaginaQuemSomosPageObject.tituloDeNossosBeneficiosLabel().getText());
        Assert.assertEquals("Qualidade", validarAPaginaQuemSomosPageObject.subtituloDeQualidadeNoNossosBeneficiosLabel().getText());
        Assert.assertEquals("Métodos ágeis", validarAPaginaQuemSomosPageObject.subtituloMetodosAgeisLabel().getText());
        Assert.assertEquals("Design Thinking", validarAPaginaQuemSomosPageObject.subtituloDesignThinkingLabel().getText());
        Assert.assertEquals("Suporte 24h", validarAPaginaQuemSomosPageObject.subtituloSuporteLabel().getText());
    }
}
package br.com.db.steps;

import br.com.db.pageobjects.ValidarAPaginaOQueFazemosPageObject;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaOQueFazemosStep {
    private final WebDriver driver;
    private final ValidarAPaginaOQueFazemosPageObject validarAPaginaOQueFazemosPageObject;

    public ValidarAPaginaOQueFazemosStep(WebDriver _driver) {
        driver = _driver;
        validarAPaginaOQueFazemosPageObject = new ValidarAPaginaOQueFazemosPageObject(_driver);
    }

    public void validaOUrlDaPaginaOQueFazemos() {
        acessaNaPaginaOQueFazemos();
        Assert.assertEquals("https://site-institucional-db-fork.vercel.app/cases", driver.getCurrentUrl());
    }

    public void validarOTituloEOsSubtitulosNaPagina() {
        validarCasePetLove();
        validarServicoOferecidosNoCenter();
        validarNoCardDeServico();
    }

    private void acessaNaPaginaOQueFazemos() {
        validarAPaginaOQueFazemosPageObject.oQueFazemosButton().click();
    }

    private void validarCasePetLove() {
        Assert.assertEquals("CASE PETLOVE", validarAPaginaOQueFazemosPageObject.tituloCasePetLoveLabel().getText());
    }

    private void validarServicoOferecidosNoCenter() {
        Assert.assertEquals("Serviços oferecidos", validarAPaginaOQueFazemosPageObject.tituloServicoOferecidosLabel().getText());
        Assert.assertEquals("Métodos ágeis", validarAPaginaOQueFazemosPageObject.subtituloMetodosAgeisLabel().getText());
        Assert.assertEquals("Scrum", validarAPaginaOQueFazemosPageObject.subtituloScrumLabel().getText());
        Assert.assertEquals("Transformação digital", validarAPaginaOQueFazemosPageObject.subtituloTransformacaoDigitalLabel().getText());
        Assert.assertEquals("Qualidade", validarAPaginaOQueFazemosPageObject.subtituloQualidadeLabel().getText());
    }

    private void validarNoCardDeServico() {
        Assert.assertEquals("Serviços oferecidos", validarAPaginaOQueFazemosPageObject.tituloDoCardServicoOferecidosLabel().getText());
        Assert.assertEquals("Design Think para o setor pet", validarAPaginaOQueFazemosPageObject.subtituloDoCardDesginThinkLabel().getText());
        Assert.assertEquals("Inteligência artificial na Veterinária", validarAPaginaOQueFazemosPageObject.subtituloDoCardIAnaVeterinariaLabel().getText());
        Assert.assertEquals("Integrando tecnologia e bem-estar pet", validarAPaginaOQueFazemosPageObject.subtituloDoCardBemEstarPetLabel().getText());
    }
}
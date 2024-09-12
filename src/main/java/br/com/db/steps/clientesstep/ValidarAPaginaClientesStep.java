package br.com.db.steps.clientesstep;

import br.com.db.pageobjects.clientespageobject.ValidarAPaginaClientesPageObject;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaClientesStep {
    private final WebDriver driver;
    private final ValidarAPaginaClientesPageObject validarAPaginaClientesPageObject;

    public ValidarAPaginaClientesStep(WebDriver _driver) {
        driver = _driver;
        validarAPaginaClientesPageObject = new ValidarAPaginaClientesPageObject(_driver);
    }

    public void validaOUrlDaPaginaClientes() {
        acessaNaPaginaClientes();
        Assert.assertEquals("https://site-institucional-db-fork.vercel.app/clientes", driver.getCurrentUrl());
    }

    public void validarOTituloEOsSubtitulosNaPagina() {
        validaOTituloNosFazemosADiferenca();
        validaCasesNosCards();
        validarConhecaAlgunsClientes();
        validarDeNossosBeneficios();
    }

    private void acessaNaPaginaClientes() {
        validarAPaginaClientesPageObject.clientesButton().click();
    }

    private void validaOTituloNosFazemosADiferenca() {
        Assert.assertEquals("NÓS FAZEMOS A DIFERENÇA", validarAPaginaClientesPageObject.tituloNosFazemosADiferencaLabel().getText());
    }

    private void validaCasesNosCards() {
        Assert.assertEquals("Case de sucesso", validarAPaginaClientesPageObject.subtituloCaseDeSucessoLabel().getText());
        Assert.assertEquals("Case Varejo", validarAPaginaClientesPageObject.subtituloNoCardCaseVarejoLabel().getText());
        Assert.assertEquals("Case setor Pet", validarAPaginaClientesPageObject.subtituloNoCardCaseSetorPetLabel().getText());
        Assert.assertEquals("Case Finanças", validarAPaginaClientesPageObject.subtituloNoCardCaseFinancasLabel().getText());
    }

    private void validarConhecaAlgunsClientes() {
        Assert.assertEquals("Conheça alguns clientes", validarAPaginaClientesPageObject.tituloCOnhecaAlgunsClientesLabel().getText());
    }

    private void validarDeNossosBeneficios() {
        Assert.assertEquals("Nossos benefícios", validarAPaginaClientesPageObject.tituloNossosBeneficiosLabel().getText());
        Assert.assertEquals("Qualidade", validarAPaginaClientesPageObject.subtituloQualidadeLabel().getText());
        Assert.assertEquals("Métodos ágeis", validarAPaginaClientesPageObject.subtituloMetodosAgeis().getText());
        Assert.assertEquals("Design Thinking", validarAPaginaClientesPageObject.subtituloDesginThinkingLabel().getText());
        Assert.assertEquals("Suporte 24h", validarAPaginaClientesPageObject.subtituloSuporteLabel().getText());
    }
}
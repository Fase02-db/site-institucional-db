package br.com.db.steps.customsteps.contatostep;

import br.com.db.pageobjects.custompageobjects.contatopageobject.ValidarAPaginaContatoPageObject;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaContatoStep {
    private final WebDriver driver;
    private final ValidarAPaginaContatoPageObject validarAPaginaContatoPageObject;

    public ValidarAPaginaContatoStep(WebDriver _driver) {
        driver = _driver;
        validarAPaginaContatoPageObject = new ValidarAPaginaContatoPageObject(_driver);
    }

    public void validarOUrlDaPaginaContato() {
        acessaNaPaginaContato();
        Assert.assertEquals("https://site-institucional-db-fork.vercel.app/contato", driver.getCurrentUrl());
    }

    public void validarOTituloEOsSubtitulosNaPagina() {
        validarNossosEnderecos();
        validarEntreEmContato();
    }

    private void acessaNaPaginaContato() {
        validarAPaginaContatoPageObject.contatoButton().click();
    }

    private void validarNossosEnderecos() {
        Assert.assertEquals("Nossos endereços", validarAPaginaContatoPageObject.tituloNossosEnderecosLabel().getText());
        Assert.assertEquals("Rio Grande do Sul", validarAPaginaContatoPageObject.tituloCidadeRSLabel().getText());
        Assert.assertEquals("São Paulo", validarAPaginaContatoPageObject.tituloCidadeSPLabel().getText());
    }

    private void validarEntreEmContato() {
        Assert.assertEquals("Entre em contato", validarAPaginaContatoPageObject.tituloEntreEmContatoLabel().getText());
    }
}
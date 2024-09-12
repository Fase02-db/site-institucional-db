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

    private void acessaNaPaginaClientes() {
        validarAPaginaClientesPageObject.clientesButton().click();
    }
}
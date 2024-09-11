package br.com.db.validations.pages;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaStep {
    private final WebDriver driver;

    public ValidarAPaginaStep(WebDriver _driver) {
        driver = _driver;
    }

    public void validarAPaginaInicial() {
        Assert.assertEquals("https://site-institucional-db-fork.vercel.app/", driver.getCurrentUrl());
        Assert.assertEquals("ABC Technology", driver.getTitle());
    }
}
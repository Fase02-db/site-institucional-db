package br.com.db.steps.home;

import br.com.db.pageobjects.home.ValidarAPaginaPageObject;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaStep {
    private final WebDriver driver;
    private final ValidarAPaginaPageObject validarAPaginaPageObject;

    public ValidarAPaginaStep(WebDriver _driver) {
        driver = _driver;
        validarAPaginaPageObject = new ValidarAPaginaPageObject(_driver);
    }

    public void validarAUrlDaPaginaInicial() {
        Assert.assertEquals("https://site-institucional-db-fork.vercel.app/", driver.getCurrentUrl());
    }

    public void validarOTituloEOsSubtitulosNaPagina() {
        validarOtituloDaPaginaInicial();
        validarElementDoTitulo();
        validarOSubtituloDeSobreAABC();
        validarOSubtituloDeNoticiasDaMidia();
        validarOSubtituloDeEntreEmContato();
    }

    private void validarOtituloDaPaginaInicial() {
        Assert.assertEquals("ABC Technology", driver.getTitle());
    }

    private void validarElementDoTitulo() {
        Assert.assertEquals("SOLUÇÕES DE TECNOLOGIA PARA SUA EMPRESA", validarAPaginaPageObject.elementDoTituloDaPaginaLabel().getText());
    }

    private void validarOSubtituloDeSobreAABC() {
        Assert.assertEquals("Sobre a ABC", validarAPaginaPageObject.subtituloDeSobreAABCLabel().getText());
    }

    private void validarOSubtituloDeNoticiasDaMidia() {
        Assert.assertEquals("Notícias da mídia", validarAPaginaPageObject.subtituloDeNoticiasDaMidiaLabel().getText());
    }

    public void validarOSubtituloDeEntreEmContato() {
        Assert.assertEquals("Entre em contato", validarAPaginaPageObject.subtituloDeEntreEmContatoLabel().getText());
    }
}
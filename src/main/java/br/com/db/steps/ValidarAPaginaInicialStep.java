package br.com.db.steps;

import br.com.db.pageobjects.ValidarAPaginaInicialPageObject;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ValidarAPaginaInicialStep {
    private final WebDriver driver;
    private final ValidarAPaginaInicialPageObject validarAPaginaInicialPageObject;

    public ValidarAPaginaInicialStep(WebDriver _driver) {
        driver = _driver;
        validarAPaginaInicialPageObject = new ValidarAPaginaInicialPageObject(_driver);
    }

    public void validarOUrlDaPaginaInicial() {
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
        Assert.assertEquals("SOLUÇÕES DE TECNOLOGIA PARA SUA EMPRESA", validarAPaginaInicialPageObject.elementDoTituloDaPaginaLabel().getText());
    }

    private void validarOSubtituloDeSobreAABC() {
        Assert.assertEquals("Sobre a ABC", validarAPaginaInicialPageObject.subtituloDeSobreAABCLabel().getText());
    }

    private void validarOSubtituloDeNoticiasDaMidia() {
        Assert.assertEquals("Notícias da mídia", validarAPaginaInicialPageObject.subtituloDeNoticiasDaMidiaLabel().getText());
    }

    public void validarOSubtituloDeEntreEmContato() {
        Assert.assertEquals("Entre em contato", validarAPaginaInicialPageObject.subtituloDeEntreEmContatoLabel().getText());
    }
}
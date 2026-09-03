function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Calculadora de Recarga VE')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function abrirCalculadoraSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Calculadora de Recarga VE');
  SpreadsheetApp.getUi().showSidebar(html);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ Veículo Elétrico')
    .addItem('Abrir Calculadora', 'abrirCalculadoraSidebar')
    .addToUi();
}
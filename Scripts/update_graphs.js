var x = document.evaluate('//paper-icon-button[contains(@title, "Fit domain to data")]', document, null, XPathResult.ANY_TYPE, null);
var i = [];
while (i = x.iterateNext()) {
    i.click();
}
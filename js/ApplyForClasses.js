function reload() {
    window.location.reload;
}

// check for correct path:
var cPath = "/terms/Daytona-Prescott%202024%20Fall/cart";
if (window.location.pathname === "/terms/Daytona-Prescott%202024%20Fall/options") {
    window.location.pathname = cPath;
}
//

function validate() {
    const spanElements = document.getElementsByTagName('span');
    for (var i = 0; i < spanElements.length;i++) {
        if (spanElements[i].innerHTML == "Validate") {
            index = i;
        }
    }
    const validationResultsElement = document.getElementsByName('__RequestVerificationToken')[0];
    if (!validationResultsElement || !validationResultsElement.getAttributeNode("aria-hidden")) {
        spanElements[index].click();
    }
    setTimeout(clearValidationResults(validationResultsElement), 6000);
}
function clearValidationResults(validationResultsElement) {
    if (validationResultsElement.getAttributeNode("aria-hidden")) {
        var button = document.getElementsByClassName(' css-6pmogs-hoverStyles-hoverStyles-defaultStyle-wideStyle')[1];
        if (button.nodeType == '1') {
            button.click();
        }
    }
    setTimeout(clickRegisterButton(),1000);
}

function clickRegisterButton() {
    var registerButton = document.getElementsByClassName(' css-6pmogs-hoverStyles-hoverStyles-defaultStyle-wideStyle')[0];
    if (registerButton.nodeType == '1') {
        registerButton.click();
    }
}

validate();
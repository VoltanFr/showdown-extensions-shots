function buttonClicked() {
    const inputTextArea = document.getElementById('inputTextArea');
    const inputText = inputTextArea.value;

    var output = "<p><strong>" + inputText + "</strong></p>";

    const renderedDiv = document.getElementById('renderedDiv');
    renderedDiv.innerHTML = output;
}

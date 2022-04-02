function convertMarkdown(src) {
    var converter = new showdown.Converter({ tables: true });
    converter.setOption('openLinksInNewWindow', 'true');
    converter.setOption('simplifiedAutoLink', 'true');
    converter.setOption('simpleLineBreaks', 'true');
    converter.setOption('noHeaderId', 'true');
    return converter.makeHtml(src);
}

function buttonClicked() {
    const inputTextArea = document.getElementById('inputTextArea');
    const inputText = inputTextArea.value;

    var output = convertMarkdown(inputText);

    const renderedDiv = document.getElementById('renderedDiv');
    renderedDiv.innerHTML = output;
}

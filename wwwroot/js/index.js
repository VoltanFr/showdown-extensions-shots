//Resources:
//- https://github.com/showdownjs/showdown/issues/518

function convertMarkdown(src) {
    var converter = new showdown.Converter({ tables: true, extensions: ['replaceWithRegex', 'replaceHeader'] });
    converter.setOption('openLinksInNewWindow', 'true');
    converter.setOption('simplifiedAutoLink', 'true');
    converter.setOption('simpleLineBreaks', 'true');
    converter.setOption('noHeaderId', 'true');
    converter.setOption('extensions', 'replaceHeader');
    return converter.makeHtml(src);
}

function buttonClicked() {
    const inputTextArea = document.getElementById('inputTextArea');
    const inputText = inputTextArea.value;

    var output = convertMarkdown(inputText);

    const renderedDiv = document.getElementById('renderedDiv');
    renderedDiv.innerHTML = output;
}

//Sample #1: replace aaa with yo
showdown.extension('replaceWithRegex', function () {
    return [
        {
            type: 'lang',
            regex: /This will be substituted!/,
            replace: function (s, match) {
                return 'This has been substituted!';
            }
        },
    ]
});

//Sample #2: replace any header (listener)
//This uses a 'before' event, in which the whole raw text is passed (not the not the "partial text" that was caught by the regex and actually changed by the subparser.)
showdown.extension('replaceHeader', function () {
    return [{
        type: 'listener',
        listeners: {
            'headers.before': function (event, text, options, globals) {
                return "# Raw text was before header conversion: '" + text + "'";
            },
            'headers.after': function (event, text, options, globals) {
                return "# Raw text was after header conversion: '" + text + "'";
            },
        }
    }]
});

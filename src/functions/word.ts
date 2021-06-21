export function toPascal(value: string) {

    let i, j, string, lowers, uppers;
    string = value.replace(/([^\W_]+[^\s-]*) */g, function (text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });

    // Certain minor words should be left lowercase unless
    // they are the first or last words in the string
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
        'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];

    for (i = 0, j = lowers.length; i < j; i++)
        string = string.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
            function (text) {
                return text.toLowerCase();
            });

    // Certain words such as initialisms or acronyms should be left uppercase
    uppers = ['Id', 'Tv'];

    for (i = 0, j = uppers.length; i < j; i++)
        string = string.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
            uppers[i].toUpperCase());

    return string;
}
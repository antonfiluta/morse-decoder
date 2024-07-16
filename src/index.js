const sym = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morse = '';
    let result = '';

    let numbers = expr.split('');
    while (numbers.length >= 1) {
        let simbol = numbers.splice(0, 10);
        while (simbol.length >= 2) {
            let part = simbol.splice(0, 2).join('');
            if (part == '00') morse += '';
            if (part == '10') morse += '.';
            if (part == '11') morse += '-';
        }
        morse += " "
    }
    let resMorse = morse.split(' ')

    for (let item of resMorse) result += (sym[item] ? sym[item] : " ");
    return result.slice(0, -1);
}

module.exports = {
    decode
}
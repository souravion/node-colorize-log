const { textColor , bgColor } = require('./colors.utils')

function applyStyle(text, styleCode) {
    return `\x1b[${styleCode}m${text}\x1b[0m`;
}

function applyColor(text, colorCode) {
    return `\x1b[${colorCode}m${text}\x1b[0m`;
}

function green(message) {
    return applyColor(`${message}`, textColor.green); 
}

function red(message) {
    return applyColor(`${message}`, textColor.red);
}

function black(message) {
    return applyColor(`${message}`, textColor.black); 
}

function yellow(message) {
    return applyColor(`${message}`, textColor.yellow);
}

function blue(message) {
    return applyColor(`${message}`, textColor.blue);
}

function magenta(message) {
    return applyColor(`${message}`, textColor.magenta); 
}

function cyan(message) {
    return applyColor(`${message}`, textColor.cyan); 
}

function white(message) {
    return applyColor(`${message}`, textColor.white);
}


function bgGreen(message) {
    return applyColor(`${message}`, bgColor.green); 
}

function bgRed(message) {
    return applyColor(`${message}`, bgColor.red);
}

function bgBlack(message) {
    return applyColor(`${message}`, bgColor.black); 
}

function bgYellow(message) {
    return applyColor(`${message}`, bgColor.yellow);
}

function bgBlue(message) {
    return applyColor(`${message}`, bgColor.blue);
}

function bgMagenta(message) {
    return applyColor(`${message}`, bgColor.magenta); 
}

function bgCyan(message) {
    return applyColor(`${message}`, bgColor.cyan); 
}





function bold(text) {
    return applyStyle(text, 1); 
}

function underline(text) {
    return applyStyle(text, 4);
}

module.exports = {
    green,
    red,
    black,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    bold,
    underline,
    bgGreen,
    bgRed,
    bgBlack,
    bgYellow,
    bgBlue,
    bgMagenta,
    bgCyan
};

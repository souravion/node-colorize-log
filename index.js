const { textColor } = require('./colors.utils')

function applyStyle(text, styleCode) {
    return `\x1b[${styleCode}m${text}\x1b[0m`;
}

function applyColor(text, colorCode) {
    return `\x1b[${colorCode}m${text}\x1b[0m`;
}

function green(message) {
    return applyColor(`[SUCCESS] ${message}`, textColor.green); 
}

function red(message) {
    return applyColor(`[ERROR] ${message}`, textColor.red);
}

function black(message) {
    return applyColor(`[INFO] ${message}`, textColor.black); // Blue
}

function yellow(message) {
    return applyColor(`[INFO] ${message}`, textColor.yellow); // Blue
}

function blue(message) {
    return applyColor(`[INFO] ${message}`, textColor.blue); // Blue
}

function magenta(message) {
    return applyColor(`[INFO] ${message}`, textColor.magenta); // Blue
}

function cyan(message) {
    return applyColor(`[INFO] ${message}`, textColor.cyan); // Blue
}

function white(message) {
    return applyColor(`[INFO] ${message}`, textColor.white); // Blue
}



function bold(text) {
    return applyStyle(text, 1); // Bold
}

function underline(text) {
    return applyStyle(text, 4); // Underline
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
    underline
};

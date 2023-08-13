# Colorful Console Text

Add vibrant colors and styles to your console output with the Colorful Console Text library.

[![10.0.1](https://badge.fury.io/js/colorful-console-text.svg)](https://badge.fury.io/js/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Colorful Console Text library provides utility functions for applying various text styles and colors to terminal/console output. With this library, you can easily enhance the visual appeal of your command-line applications or scripts, making them more engaging and user-friendly.

Please use [chalk](https://github.com/chalk/chalk)  for complex requirements.

## Installation

You can install the Colorful Console Text library via npm:

```bash
npm install console-color-log
```
## Usage
To use the Colorful Text Utils library, follow these steps:
1.Import the required functions from the library:
```
const { green, red, bold,underline, bgGreen, bgRed } = require('console-color-log');
```
## Stylle 
Apply styles and colors to your text:

```
console.log(green("This is a success message")); // Apply green color
console.log(red("This is an error message")); // Apply red color
console.log(bgBlue(blue("This text has a blue background"))); // Apply blue color with blue background
console.log(underline("This text is underlined")); // Apply underline style
console.log(bold("This text is bold")); // Apply bold style
```
## Available Functions
The Colorful Text Utils library provides the following functions for applying colors and styles:

* **green**, **red**, **black**, **yellow**, **blue**, **magenta**, **cyan**, **white**: Apply respective text colors.
* **bgGreen**, **bgRed**, **bgBlack**, **bgYellow**, **bgBlue**, **bgMagenta**, **bgCya**n: Apply respective background colors.
* **bold**: Apply bold style to text.
* **underline**: Apply underline style to text.

Each function takes a single argument, which is the text you want to style or color.
## Example
```
const { green, red, bold, underline, bgYellow, cyan } = require('console-color-log');

console.log(green("Success!"));
console.log(red("Error!"));
console.log(bold("Important message"));
console.log(underline("Underlined text"));
console.log(bgYellow(cyan("Text with yellow background and cyan color")));
```
Feel free to contribute to this project by submitting issues or pull requests on [GitHub](https://pages.github.com/).



#!/usr/bin/env node
"use strict";
const program = require("commander");
const parser = require("./parser.js");

program
	.version("0.1")
	.description("takes flatcam gcode without whitespace between x and y args and adds space so 3d printers can read it")
	.arguments("<gcodefile> The gcode to be parsed <outfile> New gcode file to be outputted")
	.action((gcodefile, outfile) => parser.parse(gcodefile, outfile))
	.parse(process.argv);
if(process.argv.length == 2) program.help();

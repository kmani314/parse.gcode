"use strict";
const fs = require("fs");
const readline = require("readline");
exports.parse = (gcodefile, outfile) => {
	let outstream = fs.createWriteStream(outfile);
	const data = readline.createInterface({input:fs.createReadStream(gcodefile)});
	let pattern = new RegExp('(?<=[0-9])()(?=Y)','gm');
	data.on('line', (input) => {
		var output = input.replace(pattern, ' ');	
		outstream.write(output + ';' + '\n');
	});
}

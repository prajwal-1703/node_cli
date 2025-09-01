const fs = require("fs")
const { Command } = require ("commander");
const program = new Command();

program
	.name('counter')
	.description("CLI to do the file based tasks")
	.version('0.1.0');

program.command('count_words')
.description('Count the numeber of the words in the file')
.argument('<file>', 'file to be processed')
.action((file) => {
	fs.readFile(file, "UTF-8" ,function(err, data) {
		if (err) {
			console.error("Could not open the file", err);
			return;
		}
		else {
			const words = data.split(/\s+/).length;
			console.log(`The file has ${words} words`);
		}
	});
});

program.command('count_lines')
.description('Count the numeber of the Lines in the file')
.argument('<file>', 'file to be processed')
.action((file) => {
	fs.readFile(file, "UTF-8" ,function(err, data) {
		if (err) {
			console.error("Could not open the file", err);
			return;
		}
		else {
			const Lines = data.split(/\r?\n/).length;
			console.log(`The file has ${Lines} Lines`);
		}
	});
});
program.parse();

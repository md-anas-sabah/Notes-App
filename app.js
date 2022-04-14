const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a node",
  handler: function () {
    console.log("Removing Notes!");
  },
});

//Create remove command
yargs.command({
  command: "read",
  describe: "Reading Notes!",
  handler: function () {
    console.log("Reading Notes!");
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "Listing Nodes!",
  handler: function () {
    console.log("List a Node!");
  },
});

//add, remove , list,read

yargs.parse();

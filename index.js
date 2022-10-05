// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: "input",
        message: "What is the Title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "Installation Instrucions"
    },
    {
        type: "input",
        message: "Usage of your project?",
        name: "Usage"
    },
    {
        type: "input",
        message: "Contribution guidelines of your project?",
        name: "Contribution Guidelines"
    },
    {
        type: "input",
        message: "Test instructions for your project?",
        name: "Test Instructions"
    }
]);

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile("readme.md", ``)
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

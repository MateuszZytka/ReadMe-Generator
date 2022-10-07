// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const markdownTemplate = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
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
        name: "Installation"
    },
    {
        type: "input",
        message: "Usage of your project?",
        name: "Usage"
    },
    {
        type:"input",
        message: "Any applicable credits?",
        name: "Credits"
    },
    {
        type: "input",
        message: "Contribution guidelines of your project?",
        name: "Contribution"
    },
    {
        type: "input",
        message: "Test instructions for your project?",
        name: "Test"
    },
    {
        type: "list",
        message: "What Licenses are you using?",
        choices: [ "MIT", new inquirer.Separator(), "ISC", new inquirer.Separator(),"Mozilla", new inquirer.Separator(), "No License" ],
        name: "License"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error)=>
    error ? console.log(error) : console.log("ReadME has been generated."))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) .then ((answers) => {
        const generateReadME = markdownTemplate(answers)
        writeToFile("ReadME.md", (generateReadME))
    })
}

// Function call to initialize app
init();

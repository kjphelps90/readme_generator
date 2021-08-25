// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"    
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"    
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions: "
    },
    {
        type: "list",
        name: "license",
        message: "What type of license does your program require?",
        choices: ["MIT", "Apache", "BSD", "GPL", "Mozilla Public License"]
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide a brief guide to how to use the program: "
    },
    {
        type: "input",
        name: "contributing",
        message: "What does a user need to know to contribute: "
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    }
])
.then((response) => {
    // const readmeOutput = generateReadme(response);
    console.log(response); });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

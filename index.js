// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const promtQuestions = () => {
    return inquirer.prompt([{
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
            choices: ["MIT", "Apache-2.0", "GPL-2.0", "None"]
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
};

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {

const readmeContent = generateMarkdown(data);

fs.writeFile(fileName, readmeContent, (err) =>
                err ? console.log(err) : console.log("created README file!")
            );
}

// TODO: Create a function to initialize app
const init = () => {
    promtQuestions()
        .then((response) => {
            // console.log(response);
            writeToFile("README.md", response)
            // console.log(readmeContent);
        });
}

// Function call to initialize app
init();
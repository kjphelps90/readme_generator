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
    writeToFile("README.md", response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `# ${data.title}

    <!-- vscode-markdown-toc -->
    * 1. [Description](#Description)
    * 2. [Installation](#Installation)
    * 3. [Usage](#Usage)
    * 4. [License](#License)
    * 5. [Contributing](#Contributing)
    * 6. [Tests](#Tests)
    * 7. [Questions](#Questions)
    
    <!-- vscode-markdown-toc-config
        numbering=true
        autoSave=true
        /vscode-markdown-toc-config -->
    <!-- /vscode-markdown-toc -->
    
    
    ##  1. <a name='Description'></a>Description
            ${data.description}    
    ##  2. <a name='Installation'></a>Installation
            ${data.installation} 
    ##  3. <a name='Usage'></a>Usage
            ${data.usage}
    ##  4. <a name='License'></a>License
            ${data.license}
    ##  5. <a name='Contributing'></a>Contributing
            ${data.contributing}
    ##  6. <a name='Tests'></a>Tests
            ${data.tests}
    ##  7. <a name='Questions'></a>Questions
            ${data.github}
            ${data.email}
    `
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

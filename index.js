// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


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
};

// TODO: Create a function to write README file
writeToFile = (data) =>
`# ${data.title}

# Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Questions](#Questions)
    
## <a id='Description'></a>Description
${data.description}

## <a id='Installation'></a>Installation
${data.installation}

## <a id='Usage'></a>Usage
${data.usage}

## <a id='License'></a>License
${data.license}

## <a id='Contributing'></a>Contributing
${data.contributing}

## <a id='Tests'></a>Tests
${data.tests}

## <a id='Questions'></a>Questions
${data.github}
${data.email}`;

// TODO: Create a function to initialize app
const init = () => {
    promtQuestions()
        .then((response) => {
            console.log(response);
            let readmeContent = writeToFile(response);
            console.log(readmeContent);

            fs.writeFile("README.md", readmeContent, (err) =>
                err ? console.log(err) : console.log("created README file!")
            );
        });
}

// Function call to initialize app
init();
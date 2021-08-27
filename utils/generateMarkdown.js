// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `https://img.shields.io/badge/License-${License}-green.svg`;
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)
  \n
  ## <a id='Description'></a>Description
  ${data.description}
  \n
  ## <a id='Installation'></a>Installation
  * ${data.installation}
  \n
  ## <a id='Usage'></a>Usage
  ${data.usage}
  \n
  ## <a id='License'></a>License
  This program is covered under a ${data.license} license.
  \n
  ## <a id='Contributing'></a>Contributing
  ${data.contributing}
  \n
  ## <a id='Tests'></a>Tests
  * ${data.tests}
  \n
  ## <a id='Questions'></a>Questions
  If you have any questions please check out my GitHub page: [www.github.com/${data.username}](https://www.github.com/${data.username})
  \n\nIf you have any other questions please reach out to me at: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;

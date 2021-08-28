// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `https://img.shields.io/badge/License-${license}-green.svg`;
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`;
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  if (license !== "None") {
    return `## <a id='License'></a>License
    This program is covered under a ${license} license.
    \n`;
  }
  else{
    return "## <a id='License'></a>License This program is not covered by a license.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);

  return `# ${data.title} <a href=${link}>![ScreenShot](${badge})</a>

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
  ${data.installation}
  \n
  ## <a id='Usage'></a>Usage
  ${data.usage}
  \n
  ${section}
  \n
  ## <a id='Contributing'></a>Contributing
  ${data.contributing}
  \n
  ## <a id='Tests'></a>Tests
  ${data.tests}
  \n
  ## <a id='Questions'></a>Questions
  If you have any questions please check out my GitHub page: [www.github.com/${data.username}](https://www.github.com/${data.username})
  \n\nIf you have any other questions please reach out to me at: [${data.email}](mailto:${data.email})
  
  \n\n
  <a href="https://drive.google.com/file/d/1-4PNnst9RS5meEwkvbtke4JrOciADOoU/view">README.md demonstration</a>`;
}

module.exports = generateMarkdown;

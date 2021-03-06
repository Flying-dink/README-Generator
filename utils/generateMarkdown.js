// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log(license);
return 
}

function getBadge(badge){
  return `![GitHub license](https://img.shields.io/badge/license-${badge}-blue.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
## Title

## Description
 ${data.description}

## Table of Contents (Optional)
${data.tableOfContents}
If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${data.installation}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


## Usage 
${data.usage}

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


## License
${data.license}
The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges
${getBadge(data.license)}


![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing
${data.contributors}

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests
${ data.tests}
Go the extra mile and write tests for your application. Then provide examples on how to run them.





## Collaborators
${data.collaborators}

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.









## Questions
${data.questions}
${data.github}
${data.emailAddress}
`;
}

module.exports = generateMarkdown;

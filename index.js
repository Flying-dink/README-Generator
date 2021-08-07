// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
    {
     type: 'input', 
     name: 'title',
     message: 'what is the name of your project?'
    }, 
    {
     type: 'input',
     name: 'description',
     message: 'Please write a short description of your project'
    }, 
    {
    type: 'input',
    name: 'tableOfContents',
    message: 'If your project is large, add a table of contents'
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What steps are needed to install your project?'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What instructions are needed to use the project?'
    },
    {
     type: 'list',
     name: 'license',
     message: 'Does this project have a license?(check one)',
     choices: ['MIT','APACHE','BOOST','NONE']
    },
    {
    type: 'input',
    name: 'badges',
     message: 'Do you have a badge for this project?'
    },
    {
     type: 'input',
     name: 'contributors',
    message: 'What does the user need to know about contributing to the repo?'
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to perform tests?'
    },
    {
    type: 'input',
    name: 'repo',
    message: 'What should the user know about using the repo?'
    },
    
    {
    type: 'input',
    name: 'collaborators',
    message: 'Has anyone collaborated on this project?'
    },
    
    
    {
    type: 'input',
    name: 'questions',
    message: 'Any Questions should be directed to me at'
    },
    {
     type: 'input',
     name: 'github',
     message: 'What is your github username?'
     },
     {
     type: 'input',
     name: 'emailAddress',
     message: 'What is your e mail address?'
     },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating README...');
        writeToFile('README_SAMPLE.md', generateMarkdown({...inquirerResponses}));

    });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// const firstQuestion = {
//     type: 'input',
//     name: 'userAge',
//     message: "What is your age?"
// }


// const secondQuestion = {
//     type: 'input',
//     name: 'userName',
//     message: "What is your name?"
// }

// project title
// description, 
// installation instructions, 
// usage information, 
// contribution guidelines, and 
// test instructions

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "How would you describe your project?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "How do you install this app?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use this application?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "who are the people that contributed in this project?"
    },
    {
        type: 'input',
        name: 'test',
        message: "what instructions do this app have?"
    }
 
];

inquirer.prompt(questions).then((answers) => {

    // var template = '';

    // template+= '# ' + answers.title + "\n\n";
    // template+= '## Description \n' + answers.description + '\n\n';
    // template+= '## Installation \n' + answers.installation;

//     var template = `# ${answers.title}
    
// ## Description
// ${answers.description}

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}


// `

    var template = generateMarkdown(answers)
    // console.log(template)

    // use the writeToFile function
    writeToFile('./file/README.md', template)

  
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

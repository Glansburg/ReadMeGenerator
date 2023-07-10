//TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
//inquirer
    //.prompt(
    const questions =  [
        {
            type: 'input',
            name: 'title',
            message: 'Add a title for your readMe here:',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please provide a project title!');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'description',
            message: 'Please add a description of your readme file here:',

        },

        {

            type: 'input',
            name: 'installation',
            message: 'Add all installation info here:',

        },

        {
            type: 'input',
            name: 'usage',
            message: 'Add usage information of project here:',

        },
        {
            type: 'list',
            name: 'license',
            message: 'Add all license information here:',
            choices: ['MIT License', 'GNU General Public License v3.0', 'Boost Software License 1.0', 'Apache 2.0', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add all contributing members of project here:',
            
        },
        {
           type: 'input',
           name: 'tests',
           mesage: 'Add all testing information for your project here:', 
        },
        {
          type: 'input',
          name: 'questions',
          message: 'please add your github profile and email address here here so people can ask questions if needed of project:',

        }

    ]
    
    // )
    // .then(data => {
    //     writeToFile(data);
    // })
    
    
   function writeToFile (data) {
//         const pageTemplate = `
// # ${data.title} 
// ## ${data.description}
// ## ${data.installation}
// ## ${data.usage}
// ## ${data.license}
// ## ${data.contributing}
// ## ${data.tests}
// ## ${data.questions}
//         ` 
            fs.writeFile('README-01.md', generateMarkdown(data), (err) => 
            err ? console.error(err) : console.log ('Success'))
        
     }
// TODO: Create a function to write README file

 //writeToFile();

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(data => writeToFile(data))
}

// Function call to initialize app
init();



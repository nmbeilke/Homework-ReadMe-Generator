// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining: your motivation, why you built this project, the problem that it solves and what you learned. ',
      name: 'description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
      name: 'credits',
    },   
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])

// TODO: Create a function to write README file
.then((response) => {
    let msg = `# ${response.title}
  ## Description
  ${response.description}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing/Questions](#contributing)

    ## Installation 
    ${response.installation}
    ## Usage
    ${response.usage}
    ## License
    ${response.license}
    ## Credits
    ${response.credits}
    ## Contributing
    ${response.contributing}
    **Questions:** github.com/${response.github}
    ${response.email}
    `
    fs.writeFile(
      "README.md",
      msg,
      (err) => {
        if (err) throw err;
        console.log("Success! Readme created!")
      }
    )
  })


// .then((response) => {
//     const mdContent = generateMD(response)

// const generateMD = ({ title, description, usage, credits }) =>
// `# ${title}
//     ## Description
//     ${description}
//     ## Usage
//     ${usage}
//     ## Credits
//     ${credits}
//     `

// // TODO: Create a function to initialize app
    
//    fs.writeFile(
//       "README.md",
//       mdContent,
//       (err) => {
//         if (err) throw err;
//         console.log("Success! Saved!")
//       }
//     )
//   })

// // Function call to initialize app
// init()

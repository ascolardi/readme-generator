const fs = require("fs");
const inquirer = require("inquirer");

const index = `
# ${response.title}  

# Description
${response.description}
# Installation
${response.instructions}
# Usage
${response.usage}
# License
${response.license}
# Contributing
${response.contribution}
# Tests
${response.test}
# Questions
Github: www.github.com/${response.username}
Email: ${response.email}
`;

inquirer.prompt([
  {
    type: "text",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "text",
    message: "Please enter a brief description of your project: ",
    name: "description",
  },
  {
    type: "text",
    message: "Please enter instructions for installing your project: ",
    name: "instructions",
  },
  {
    type: "text",
    message: "Please enter usage instructions for your project: ",
    name: "usage",
  },
  {
    type: "text",
    message: "Please enter test instructions for your project: ",
    name: "test",
  },
  {
    type: "text",
    message: "Please enter contribution guidlines for your project: ",
    name: "contribution",
  },
  {
    type: "list",
    message: "Please choose a license for your project: ",
    name: "license",
    choices: ["MIT", "Apache License 2.0", "GNU General Public License v3.0"],
  },
  {
    type: "text",
    message: "Please enter your GitHub username: ",
    name: "username",
  },
  {
    type: "text",
    message: "Please enter your email address: ",
    name: "email",
  }
]) .then (response => {
 
  fs.writeFile("README.md", index, error => 
  error ? console.log("error") : console.log("success")
  )
})
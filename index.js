const inquirer = require('inquirer');
const fs = require('fs')
const generateLogo= require('./logo.svg')

function writeLogo(fileName, data) {
    fs.writeFile(fileName, data, (err)=> 
    err? console.error(err) : console.log("Success"))
  }

function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'title',
      },
      {
        type: 'list',
        message: questions[8],
        name: 'license',
        choices : ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License", "GNU Affero General Public License 3.0", "GNU General Public License", "GNU Lesser General Public License", "Mozilla Public License 2.0", "The Unlicense"]
      },
    ])
    .then()

}
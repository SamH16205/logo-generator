const inquirer = require('inquirer');
const fs = require('fs')
const shapes = require("./lib/shape")
// const generateLogo= require('./logo.svg')

function writeLogo(fileName, data) {
    fs.writeFile(fileName, data, (err)=> 
    err? console.error(err) : console.log("Generated logo.svg."))
  }

function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "Input the text for your logo (3 letters max).",
        name: 'text',
      },
      {
        type: 'input',
        message: "What color would you like the text to be?",
        name: 'text_color',
      },
      {
        type: 'list',
        message: "What shape would you like the logo to be?",
        name: 'shape',
        choices : ["Circle", "Square", "Triangle"]
      },
      {
        type: 'input',
        message: "What color would you like the shape to be?",
        name: 'shape_color',
      },
    ])
    .then((result) => {
      switch (result.shape){
        case "Circle": var logo = new shapes.Circle(result.text, result.text_color, result.shape_color)
          break
        case "Square": var logo = new shapes.Square(result.text, result.text_color, result.shape_color)
          break
        case "Triangle": var logo = new shapes.Triangle(result.text, result.text_color, result.shape_color)
          break
      }
      writeLogo("logo.svg", logo.writeSVG())
    }
    )
    
}

init()

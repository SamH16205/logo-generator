function Shape(text, textColor, shapeColor) {
    this.text = text
    this.textColor = textColor
    this.shapeColor = shapeColor
}

function Square(text, textColor, shapeColor) {
    Shape.call(this, text, textColor, shapeColor)
    this.writeSVG = function(){
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
   
     <svg width="400" height="400">
     <rect width="250" height="250" style="fill:${this.shapeColor}" />
   </svg>
   
     <text x="125" y="150" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`
    }
}

function Circle(text, textColor, shapeColor) {
    Shape.call(this, text, textColor, shapeColor)
        this.writeSVG = function(){
            return ` <svg version="1.1"
            width="500" height="500"
            xmlns="http://www.w3.org/2000/svg">
    
            <circle cx="250" cy="200" r="120" fill="${this.shapeColor}" />
    
            <text x="250" y="225" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
        </svg>`
        }
}

function Triangle(text, textColor, shapeColor) {
    Shape.call(this, text, textColor, shapeColor)
        this.writeSVG = function(){
            return `<svg version="1.1"
            width="500" height="500"
            xmlns="http://www.w3.org/2000/svg">
       
         <svg height="210" width="500">
         <polygon points="300,10 500,210 100,210" style="fill:${this.shapeColor}" />
       </svg>
       
         <text x="300" y="175" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
       
       </svg>`
        }
}


module.exports = {
    Shape,
    Square,
    Circle,
    Triangle
}
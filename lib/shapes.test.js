const Shapes = require('./shape.js');

describe('Shapes', () => {
  describe('Circle', () => {
    it('should return svg text with the parameters passed into the class', () => {
        const shape = new Shapes.Circle("SAM", "yellow", "blue");
        const svgString = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="200" r="120" fill="blue"/><text x="250" y="225" font-size="80" text-anchor="middle" fill="yellow">SAM</text></svg>`
      expect(shape.writeSVG()).toEqual(svgString);
    });
  });
});

describe('Shapes', () => {
  describe('Square', () => {
    it('should return svg text with the parameters passed into the class', () => {
        const shape = new Shapes.Square("jon", "#ed42d1", "purple");
        const svgString = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><svg width="400" height="400"><rect width="250" height="250" style="fill:purple" /></svg><text x="125" y="150" font-size="80" text-anchor="middle" fill="#ed42d1">jon</text></svg>`
      expect(shape.writeSVG()).toEqual(svgString);
    });
  });
});

describe('Shapes', () => {
  describe('Triangle', () => {
    it('should return svg text with the parameters passed into the class', () => {
        const shape = new Shapes.Triangle("aSh", "#ed42d1", "#804e77");
        const svgString = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><svg height="210" width="500"><polygon points="300,10 500,210 100,210" style="fill:#804e77" /></svg><text x="300" y="175" font-size="80" text-anchor="middle" fill="#ed42d1">aSh</text></svg>`
      expect(shape.writeSVG()).toEqual(svgString);
    });
  });
});
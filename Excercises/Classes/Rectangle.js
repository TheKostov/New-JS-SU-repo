class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}


const newRect = new Rectangle(5, 5, 'red');
console.log(newRect);
console.log(newRect.calcArea());
console.log(newRect.color)
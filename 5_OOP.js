//OBJECTS
const circle = {
    radius:1,   //property
    location:{
        x:1,
        y:1,
    },  
    draw:()=>console.log("circle")  //method
}

circle.draw();
console.log(circle.radius);

//Factory function
function createCircle(radius) {
    return{
        radius,
        draw:()=>console.log(`"circle of radius "`)
    }
}

const newCircle = createCircle(10);

//constructors
function Circle(radius){
    this.radius = radius;
    this.draw = () => {console.log(`draw circle of ${radius} radius`);
}
    
}

const another = new Circle(5);
another.draw();

//constructor property
 
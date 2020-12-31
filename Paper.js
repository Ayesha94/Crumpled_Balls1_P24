class Paper{
    constructor(x, y, radius)
    {
        var options={
            density:1.2,
            restitution:0.3,
            friction:0.5,
            isStatic:false
        }
        this.body=Bodies.circle(x, y, radius, options)
        this.radius=radius; 
        World.add(world, this.body)
        console.log(this.body)
    }

    display()
    {
        push();
        fill('#ffcc00')
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }

}
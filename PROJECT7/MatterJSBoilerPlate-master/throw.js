class Throw
{
    constructor(body1,pointB)
    {
        this.body1=body1;
        this.pointB=pointB;
        var options=
        {
            bodyA: body1,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.throw=Matter.Constraint.create(options);
        World.add(world,this.throw);
    } 
    fly(){
        this.throw.bodyA=null;
    }
    display()
    {
    }
}

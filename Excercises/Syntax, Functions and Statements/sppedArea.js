function solve(speed, residence){
    let speedLimit;
    switch(residence){
        case 'residential': speedLimit = 20; break;
        case 'city': speedLimit = 50; break;
        case 'interstate': speedLimit = 90; break;
        case 'motorway': speedLimit = 130; break;
    }
    if (speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else{
        
        if (speed - speedLimit <= 20){
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
        }
        if (speed - speedLimit <= 40 && speed - speedLimit >20){
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)  
        }
        if (speed - speedLimit > 40){
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
        }
    }
}   



solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
function solve({ model, power, color, carriage, wheelsize }){
    const engines = {
        small : {power : 90, volume : 1800},
        medium : {power : 120, volume : 2400},
        monster : {power : 200, volume : 3500},
    }

    let engine = {};
    if (power <= 90){
        engine = engines.small;
    } else if (power <= 120){
        engine = engines.medium;
    } else {    
        engine = engines.monster;
    }
    
    const newWheelSize = wheelsize % 2 === 0 ? --wheelsize : wheelsize;

    
    return car = {
        model,
        engine,
        color,
        carriage : {
            type : carriage,
            color,
        },
        wheelsize : Array(4).fill(newWheelSize),
    }
}





solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})


//{ model: 'VW Golf II', 
//engine: { power: 90, volume: 1800 }, 
//carriage: { type: 'hatchback', color: 'blue' }, 
//wheels: [13, 13, 13, 13] }
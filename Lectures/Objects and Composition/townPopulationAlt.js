function townPopulationAltSyntax(inputArr){
    const result = {};

    for (let line of inputArr){
        const [townName, townPopulation] = line.split(' <-> ');

       if (townName in result == false){
            result[townName] = 0;
       }

       result[townName] += Number(townPopulation);
    }
    console.log(Object
        .entries(result)
        .map(([townName, townPopulation]) => `${townName} : ${townPopulation}`)
        .join('\n'));
}

townPopulationAltSyntax(['Sofia <-> 1200000',
                'Montana <-> 20000',
                'New York <-> 10000000',
                'Washington <-> 2345000',
                'Las Vegas <-> 1000000']);

townPopulationAltSyntax(['Istanbul <-> 100000',
                'Honk Kong <-> 2100004',
                'Jerusalem <-> 2352344',
                'Mexico City <-> 23401925',
                'Istanbul <-> 1000']);
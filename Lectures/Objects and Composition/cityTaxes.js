function cityTaxes(name, population, treasury){
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(percentage){
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession: function(percentage){
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        }
    }
    return city;
}



cityTaxes('Tortuga', 7000, 15000);

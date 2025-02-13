var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

var serviceMethods = {
    price: function() {
        return Object.values(services)
            .map(value => parseInt(value))
            .reduce((sum, price) => sum + price, 0) + " грн";
    },
    
    minPrice: function() {
        return Math.min(...Object.values(services).map(value => parseInt(value))) + " грн";
    },
    
    maxPrice: function() {
        return Math.max(...Object.values(services).map(value => parseInt(value))) + " грн";
    }
};

console.log("Загальна вартість: ", serviceMethods.price());
console.log("Мінімальна ціна: ", serviceMethods.minPrice());
console.log("Максимальна ціна: ", serviceMethods.maxPrice());

function plant(seed, water, fert, temp){
    if(temp <20 || temp > 30){
        console.log("-".repeat(water).repeat(water)+seed)
    }
    else  {  
        console.log(("-".repeat(water)+ seed.repeat(fert)).repeat(water))
    }
}

plant("@", 3, 3, 25)
plant("#", 5, 1, 20)
plant("#", 3, 3, 15)
plant("#", 5, 1, 31)
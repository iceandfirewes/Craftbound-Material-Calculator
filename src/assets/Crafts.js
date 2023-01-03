export const crafts = [
    //LEATHER WORKING
    {name:"raw hide"},
    {name:"coarse leather", requirements:[{name:"raw hide", amount:1}]},
    {name:"coarse leather boots", requirements:[{name:"coarse leather", amount:3}]},
    {name:"coarse leather belt", requirements:[{name:"coarse leather", amount:3}]},
    {name:"coarse leather gloves", requirements:[{name:"coarse leather", amount:3}]},
    {name:"coarse leather cap", requirements:[{name:"coarse leather", amount:4}]},
    {name:"coarse leather apron", requirements:[{name:"coarse leather", amount:5}]},

    {name:"light hide"},
    {name:"tannin"},
    {name:"light leather", requirements:[{name:"light hide", amount:2},{name:"tannin", amount:1}]},
    {name:"light leather boots", requirements:[{name:"light leather", amount:3}]},
    {name:"light leather belt", requirements:[{name:"light leather", amount:3}]},
    {name:"light leather gloves", requirements:[{name:"light leather", amount:3}]},
    {name:"light leather cap", requirements:[{name:"light leather", amount:4}]},
    {name:"light leather apron", requirements:[{name:"light leather", amount:5}]},

    {name:"heavy hide"},
    {name:"rested tannin"},
    {name:"heavy leather", requirements:[{name:"heavy hide", amount:3},{name:"rested tannin", amount:1}, {name:"light leather", amount:1}]},
    {name:"heavy leather boots", requirements:[{name:"heavy leather", amount:3}]},
    {name:"heavy leather belt", requirements:[{name:"heavy leather", amount:3}]},
    {name:"heavy leather gloves", requirements:[{name:"heavy leather", amount:3}]},
    {name:"heavy leather cap", requirements:[{name:"heavy leather", amount:4}]},
    {name:"heavy leather apron", requirements:[{name:"heavy leather", amount:5}]},

    {name:"rugged hide"},
    {name:"aged tannin"},
    {name:"rugged leather", requirements:[{name:"rugged hide", amount:4},{name:"aged tannin", amount:1}, {name:"heavy leather", amount:1}]},
    {name:"rugged leather boots", requirements:[{name:"rugged leather", amount:3}]},
    {name:"rugged leather belt", requirements:[{name:"rugged leather", amount:3}]},
    {name:"rugged leather gloves", requirements:[{name:"rugged leather", amount:3}]},
    {name:"rugged leather cap", requirements:[{name:"rugged leather", amount:4}]},
    {name:"rugged leather apron", requirements:[{name:"rugged leather", amount:5}]},
]
export function craftSearch(name)
{
    return crafts.find(craft => craft.name == name)
}
/**loop through the object, and find an entry that has the right name
 * once found, check if it is the most basic ingredient (ie without a require key)
 * if it is basic, return
 * if not. call recursiveSearch on the array of items that are required and return the result as a array
 * if nothing is found, return -1 or something 
 * */
export function recursiveCraftBlueprint(name, amount)
{
    let craft = craftSearch(name, amount)
    //check if the most basic ingredient
    if(!craft.hasOwnProperty('requirements'))
    {
        return craft
    }
    else
    {
        return [craft, craft.requirements.map(requirement => recursiveCraftBlueprint(requirement.name, requirement.amount))]
    }
}
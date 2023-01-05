const raw_materials = {
    //LEATHERWORKING
    leatherworking:[
        {name: "raw hide", rarity: ["common"]},
        {name:"light hide", rarity: ["common"]},
        {name:"tannin", rarity: ["common"]},
        {name:"heavy hide", rarity: ["common"]},
        {name:"rested tannin", rarity: ["common"]},
        {name:"rugged hide",rarity:["common"]},
        {name:"aged tannin",rarity:["common"]}
    ]
    
}
export function searchRawMaterials(type, name)
{
    return raw_materials[type].find(material => material.name == name)
}
//add more crafts
export const crafts = {
    leatherworking:[
        //TIER 1
        {name:"coarse leather", requirements:[
            {type:"leatherworking", name: "raw hide", amount:1, raw: true}]},
        {name:"coarse leather boots", requirements:[{type:"leatherworking", name:"coarse leather", amount:3, raw: false}]},
        {name:"coarse leather belt", requirements:[{type:"leatherworking", name:"coarse leather", amount:3, raw: false}]},
        {name:"coarse leather gloves", requirements:[{type:"leatherworking", name:"coarse leather", amount:3, raw: false}]},
        {name:"coarse leather cap", requirements:[{type:"leatherworking", name:"coarse leather", amount:4, raw: false}]},
        {name:"coarse leather apron", requirements:[{type:"leatherworking", name:"coarse leather", amount:5, raw: false}]},
        //TIER 2
        {name:"light leather", requirements:[
            {type:"leatherworking", name:"light hide", amount:2, raw: true},
            {type:"leatherworking", name:"tannin", amount:1, raw: true}]},
        {name:"light leather boots", requirements:[{type:"leatherworking", name:"light leather", amount:3, raw: false}]},
        {name:"light leather belt", requirements:[{type:"leatherworking", name:"light leather", amount:3, raw: false}]},
        {name:"light leather gloves", requirements:[{type:"leatherworking", name:"light leather", amount:3, raw: false}]},
        {name:"light leather cap", requirements:[{type:"leatherworking", name:"light leather", amount:4, raw: false}]},
        {name:"light leather apron", requirements:[{type:"leatherworking", name:"light leather", amount:5, raw: false}]},
        //TIER 3
        {name:"heavy leather", requirements:[
            {type:"leatherworking", name:"heavy hide", amount:3, raw: true},
            {type:"leatherworking", name:"rested tannin", amount:1, raw: true},
            {type:"leatherworking", name:"light leather", amount:1, raw: false}]},
        {name:"heavy leather boots", requirements:[{type:"leatherworking", name:"heavy leather", amount:3, raw: false}]},
        {name:"heavy leather belt", requirements:[{type:"leatherworking", name:"heavy leather", amount:3, raw: false}]},
        {name:"heavy leather gloves", requirements:[{type:"leatherworking", name:"heavy leather", amount:3, raw: false}]},
        {name:"heavy leather cap", requirements:[{type:"leatherworking", name:"heavy leather", amount:4, raw: false}]},
        {name:"heavy leather apron", requirements:[{type:"leatherworking", name:"heavy leather", amount:5, raw: false}]},
        //TIER 4
        {name:"rugged leather", requirements:[
            {type:"leatherworking", name:"rugged hide", amount:4, raw: true},
            {type:"leatherworking", name:"aged tannin", amount:1, raw: true},
            {type:"leatherworking", name:"heavy leather", amount:1, raw: false}]},
        {name:"rugged leather boots", requirements:[{type:"leatherworking", name:"rugged leather", amount:3, raw: false}]},
        {name:"rugged leather belt", requirements:[{type:"leatherworking", name:"rugged leather", amount:3, raw: false}]},
        {name:"rugged leather gloves", requirements:[{type:"leatherworking", name:"rugged leather", amount:3, raw: false}]},
        {name:"rugged leather cap", requirements:[{type:"leatherworking", name:"rugged leather", amount:4, raw: false}]},
        {name:"rugged leather apron", requirements:[{type:"leatherworking", name:"rugged leather", amount:5, raw: false}]},
    ]
}
export function craftSearch(type, name)
{
    return crafts[type].find(craft => craft.name == name)
}





// function testRecursiveCraftBlueprint(name, rawFlag)
// {
    
//     if (rawFlag){
//         return searchRaw_Materials(name)
//     }
//     else
//     {
//         const craft = testCrafts.find(craft => craft.name == name)
//         return [craft, craft.requirements.map(requirement => testRecursiveCraftBlueprint(requirement.name, requirement.raw))]
//     }
// }
// function recursiveCraftBlueprint(name)
// {
//     let craft = craftSearch(name)
//     //check if the most basic ingredient
//     if(!craft.hasOwnProperty('requirements'))
//     {
//         return craft
//     }
//     else
//     {
//         return [craft, craft.requirements.map(requirement => recursiveCraftBlueprint(requirement.name))]
//     }
// }
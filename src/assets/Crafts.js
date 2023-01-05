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
    ],
    blacksmithing:[
        {name: "copper ore", rarity: ["common"]},
        {name: "iron ore", rarity: ["common"]},
        {name: "sand flux", rarity: ["common"]},
        {name: "coal", rarity: ["common"]},
        {name: "limestone flux", rarity: ["common"]},
        {name: "silver ore", rarity: ["common"]},
        {name: "liquid flux", rarity: ["common"]},
    ]
}
export const crafts = {
    leatherworking:{
        //TIER 1
        I:[
            {name:"coarse leather", requirements:[
                {type:"leatherworking", tier: "I", name: "raw hide", amount:1, raw: true}]},
            {name:"coarse leather boots", requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3, raw: false}]},
            {name:"coarse leather belt", requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3, raw: false}]},
            {name:"coarse leather gloves", requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3, raw: false}]},
            {name:"coarse leather cap", requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:4, raw: false}]},
            {name:"coarse leather apron", requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:5, raw: false}]},
        ],
        //TIER 2
        II:[
            {name:"light leather", requirements:[
                {type:"leatherworking", tier: "II", name:"light hide", amount:2, raw: true},
                {type:"leatherworking", tier: "II", name:"tannin", amount:1, raw: true}]},
            {name:"light leather boots", requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3, raw: false}]},
            {name:"light leather belt", requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3, raw: false}]},
            {name:"light leather gloves", requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3, raw: false}]},
            {name:"light leather cap", requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:4, raw: false}]},
            {name:"light leather apron", requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:5, raw: false}]},
        ],
        //TIER 3
        III:[
            {name:"heavy leather", requirements:[
                {type:"leatherworking", tier: "III", name:"heavy hide", amount:3, raw: true},
                {type:"leatherworking", tier: "III", name:"rested tannin", amount:1, raw: true},
                {type:"leatherworking", tier: "II", name:"light leather", amount:1, raw: false}]},
            {name:"heavy leather boots", requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3, raw: false}]},
            {name:"heavy leather belt", requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3, raw: false}]},
            {name:"heavy leather gloves", requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3, raw: false}]},
            {name:"heavy leather cap", requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:4, raw: false}]},
            {name:"heavy leather apron", requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:5, raw: false}]},
        ],
        //TIER 4
        IV:[
            {name:"rugged leather", requirements:[
                {type:"leatherworking", tier: "IV", name:"rugged hide", amount:4, raw: true},
                {type:"leatherworking", tier: "IV", name:"aged tannin", amount:1, raw: true},
                {type:"leatherworking", tier: "III", name:"heavy leather", amount:1, raw: false}]},
            {name:"rugged leather boots", requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3, raw: false}]},
            {name:"rugged leather belt", requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3, raw: false}]},
            {name:"rugged leather gloves", requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3, raw: false}]},
            {name:"rugged leather cap", requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:4, raw: false}]},
            {name:"rugged leather apron", requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:5, raw: false}]},
        ]
    },
    blacksmithing:{
        I:[
            {name:"bronze ingot", requirements:[
                {type:"blacksmithing", tier: "I", name: "copper ore", amount:1, raw: true}]}
        ],
        II:[
            {name:"iron ingot", requirements:[
                {type:"blacksmithing", tier: "II", name: "iron ore", amount:2, raw: true},
                {type:"blacksmithing", tier: "II", name: "sand flux", amount:1, raw: true}]}
        ],
        III:[
            {name:"steel ingot", requirements:[
                {type:"blacksmithing", tier: "III", name: "coal", amount:3, raw: true},
                {type:"blacksmithing", tier: "III", name: "limestone flux", amount:1, raw: true},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:1, raw: false}]}
        ],
        IV:[
            {name:"silver ingot", requirements:[
                {type:"blacksmithing", tier: "IV", name: "silver ore", amount:4, raw: true},
                {type:"blacksmithing", tier: "IV", name: "liquid flux", amount:1, raw: true},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:1, raw: false}]}
        ],
    }
}
export function searchRawMaterials(type, name)
{
    return raw_materials[type].find(material => material.name == name)
}
//add more crafts

export function craftSearch(type, tier, name)
{
    return crafts[type][tier].find(craft => craft.name == name)
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
export const rarityColor = {
    common: "#ffffff",
    unconmmon: "#31c456",
    rare: "#1891ff",
    epic: "#9479ff",
    legendary: "#fa794b",
    special: "#f6e34f",
}
const raw_materials = {
    //LEATHERWORKING
    leatherworking:[
        {name: "raw hide", rarities: ["common"]},
        {name:"light hide", rarities: ["common"]},
        {name:"tannin", rarities: ["common"]},
        {name:"heavy hide", rarities: ["common"]},
        {name:"rested tannin", rarities: ["common"]},
        {name:"rugged hide",rarities:["common"]},
        {name:"aged tannin",rarities:["common"]}
    ],
    blacksmithing:[
        {name: "copper ore", rarities: ["common"]},
        {name: "iron ore", rarities: ["common"]},
        {name: "sand flux", rarities: ["common"]},
        {name: "coal", rarities: ["common"]},
        {name: "limestone flux", rarities: ["common"]},
        {name: "silver ore", rarities: ["common"]},
        {name: "liquid flux", rarities: ["common"]},
    ],
    tailoring:[
        {name:"fiber", rarities: ["common"]},
        {name:"cotton", rarities: ["common"]},
        {name:"coarse thread", rarities: ["common"]},
        {name:"hemp", rarities: ["common"]},
        {name:"fine thread", rarities: ["common"]},
        {name:"silkweed",rarities:["common"]},
        {name:"silken thread",rarities:["common"]}
    ],
    woodworking:[
        {name:"beech log", rarities: ["common"]},
        {name:"pine log", rarities: ["common"]},
        {name:"coarse sandpaper", rarities: ["common"]},
        {name:"oak log", rarities: ["common"]},
        {name:"rugged sandpaper", rarities: ["common"]},
        {name:"birch log", rarities: ["common"]},
        {name:"fine sandpaper", rarities: ["common"]},
    ],
    jewelcrafting:[
        //T1
        {name:"flint", rarities: ["common"]},
        {name:"bronze wire", rarities: ["common"]},
        {name:"bronze chain", rarities: ["common"]},
        //T2
        {name:"weak solvent", rarities: ["common"]},
        {name:"emerald ore", rarities: ["uncommon"]},
        {name:"iron wire", rarities: ["common"]},
        {name:"iron chain", rarities: ["common"]},
        //T3
        {name:"amber ore", rarities: ["uncommon"]},
        {name:"potent solvent", rarities: ["common"]},
        {name:"brilliant ruby ore", rarities: ["rare"]},
        {name:"steel wire", rarities: ["common"]},
        {name:"steel chain", rarities: ["common"]},
        {name:"flint", rarities: ["common"]},
        //T4
        {name:"pure solvent", rarities: ["common"]},
        {name:"pristine crystal ore", rarities: ["epic"]},
        {name:"brilliant aquamarine ore", rarities: ["rare"]},
        {name:"silver wire", rarities: ["common"]},
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
    },
    tailoring:{
        //TIER 1
        I:[
            {name:"linen cloth", requirements:[
                {type:"tailoring", tier: "I", name: "fiber", amount:1, raw: true}]},
            {name:"linen sash", requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:3, raw: false}]},
            {name:"linen gloves", requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:3, raw: false}]},
            {name:"linen bandana", requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:4, raw: false}]},
            {name:"linen shirt", requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:5, raw: false}]},
        ],
        //TIER 2
        II:[
            {name:"wool cloth", requirements:[
                {type:"tailoring", tier: "II", name: "cotton", amount:2, raw: true},
                {type:"tailoring", tier: "II", name: "coarse thread", amount:1, raw: true}
            ]},
            {name:"wool sash", requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:3, raw: false}]},
            {name:"wool gloves", requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:3, raw: false}]},
            {name:"wool bandana", requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:4, raw: false}]},
            {name:"wool shirt", requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:5, raw: false}]},
        ],
        //TIER 3
        III:[
            {name:"sateen", requirements:[
                {type:"tailoring", tier: "III", name: "hemp", amount:3, raw: true},
                {type:"tailoring", tier: "III", name: "fine thread", amount:1, raw: true},
                {type:"tailoring", tier: "II", name: "wool cloth", amount:1, raw: false}
            ]},
            {name:"sateen sash", requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:3, raw: false}]},
            {name:"sateen gloves", requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:3, raw: false}]},
            {name:"sateen bandana", requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:4, raw: false}]},
            {name:"sateen shirt", requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:5, raw: false}]},
        ],
        //TIER 4
        IV:[
            {name:"silk cloth", requirements:[
                {type:"tailoring", tier: "IV", name: "silkweed", amount:4, raw: true},
                {type:"tailoring", tier: "IV", name: "silken thread", amount:1, raw: true},
                {type:"tailoring", tier: "III", name: "sateen", amount:1, raw: false}
            ]},
            {name:"silk sash", requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:3, raw: false}]},
            {name:"silk gloves", requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:3, raw: false}]},
            {name:"silk bandana", requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:4, raw: false}]},
            {name:"silk shirt", requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:5, raw: false}]},
        ]
    },
    woodworking:{
        I:[
            {name:"beech lumber", requirements:[
                {type:"woodworking", tier: "I", name: "beech log", amount:1, raw: true}]}
        ],
        II:[
            {name:"pine lumber", requirements:[
                {type:"woodworking", tier: "II", name: "pine log", amount:2, raw: true},
                {type:"woodworking", tier: "II", name: "coarse sandpaper", amount:1, raw: true}]}
        ],
        III:[
            {name:"oak lumber", requirements:[
                {type:"woodworking", tier: "III", name: "oak log", amount:3, raw: true},
                {type:"woodworking", tier: "III", name: "rugged sandpaper", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:1, raw: false}]}
        ],
        IV:[
            {name:"birch lumber", requirements:[
                {type:"woodworking", tier: "IV", name: "birch log", amount:4, raw: true},
                {type:"woodworking", tier: "IV", name: "fine sandpaper", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:1, raw: false}]}
        ],
    },
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
export const rarityColor = {
    common: "#ffffff",
    uncommon: "#31c456",
    rare: "#1891ff",
    epic: "#9479ff",
    legendary: "#fa794b",
    special: "#f6e34f",
}
const raw_materials = {
    skinning:[
        //TIER 1
        {name: "raw hide", rarities: ["common"]},
        //TIER 2
        {name:"light hide", rarities: ["common"]},
        {name:"fox pelt", rarities: ["rare"]},
        //TIER 3
        {name:"heavy hide", rarities: ["common"]},
        {name:"basilisk scale", rarities: ["uncommon"]},
        //TIER 4
        {name:"rugged hide",rarities:["common"]},
        {name:"shimmering scale", rarities: ["uncommon"]},
        {name:"polar bear pelt", rarities: ["epic"]},
    ],
    mining:[
        //TIER 1
        {name: "copper ore", rarities: ["common"]},
        //TIER 2
        {name: "iron ore", rarities: ["common"]},
        {name:"emerald ore", rarities: ["uncommon"]},
        //TIER 3
        {name: "coal", rarities: ["common"]},
        {name:"amber ore", rarities: ["uncommon"]},
        {name:"brilliant ruby ore", rarities: ["rare"]},
        //TIER 4
        {name: "silver ore", rarities: ["common"]},
        {name:"celestine ore", rarities: ["uncommon"]},
        {name:"brilliant aquamarine ore", rarities: ["rare"]},
        {name:"pristine crystal ore", rarities: ["epic"]},
    ],
    logging:[
        //TIER 1
        {name:"beech log", rarities: ["common"]},
        {name:"beech tree sap", rarities: ["uncommon"]},
        //TIER 2
        {name:"pine log", rarities: ["common"]},
        {name:"pine tree sap", rarities: ["uncommon"]},
        //TIER 3
        {name:"oak log", rarities: ["common"]},
        {name:"oak tree sap", rarities: ["uncommon"]},
        //TIER 4
        {name:"birch log", rarities: ["common"]},
        {name:"birch tree sap", rarities: ["uncommon"]},
        {name:"elfwood", rarities: ["epic"]},
    ],
    harvesting:[
        //TIER 1
        {name:"fiber", rarities: ["common"]},
        {name:"flint", rarities: ["common"]},
        //TIER 2
        {name:"cotton", rarities: ["common"]},
        {name:"silverleaf", rarities: ["uncommon"]},
        //TIER 3
        {name:"hemp", rarities: ["common"]},
        {name:"deadleaf", rarities: ["uncommon"]},
        {name:"petrified root", rarities: ["rare"]},
        //TIER 4
        {name:"silkweed",rarities:["common"]},
        {name:"frostleaf", rarities: ["uncommon"]},
    ],
    leatherworking:[        
        {name:"tannin", rarities: ["common"]},
        {name:"rested tannin", rarities: ["common"]},
        {name:"aged tannin",rarities:["common"]}
    ],
    blacksmithing:[
        {name: "sand flux", rarities: ["common"]},
        {name: "limestone flux", rarities: ["common"]},
        {name: "liquid flux", rarities: ["common"]},
    ],
    tailoring:[
        {name:"coarse thread", rarities: ["common"]},
        {name:"fine thread", rarities: ["common"]},
        {name:"silken thread",rarities:["common"]}
    ],
    woodworking:[
        {name:"coarse sandpaper", rarities: ["common"]},
        {name:"rugged sandpaper", rarities: ["common"]},
        {name:"fine sandpaper", rarities: ["common"]},
    ],
    jewelcrafting:[
        //T1
        {name:"flint", rarities: ["common"]},
        {name:"bronze wire", rarities: ["common"]},
        {name:"bronze chain", rarities: ["common"]},
        //T2
        {name:"weak solvent", rarities: ["common"]},
        {name:"iron wire", rarities: ["common"]},
        {name:"iron chain", rarities: ["common"]},
        //T3
        {name:"potent solvent", rarities: ["common"]},
        {name:"steel wire", rarities: ["common"]},
        {name:"steel chain", rarities: ["common"]},
        {name:"flint", rarities: ["common"]},
        //T4
        {name:"pure solvent", rarities: ["common"]},
        {name:"silver wire", rarities: ["common"]},
    ]
}
export const crafts = {
    leatherworking:{
        //TIER 1
        I:[
            {name:"coarse leather", rarities:["common", "uncommon"], requirements:[
                {type:"skinning", tier: "I", name: "raw hide", amount:1, raw: true}]},
            {name:"coarse leather boots", rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3,}]},
            {name:"coarse leather belt", rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3,}]},
            {name:"coarse leather gloves", rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3,}]},
            {name:"coarse leather cap", rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:4,}]},
            {name:"coarse leather apron", rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:5,}]},
        ],
        //TIER 2
        II:[
            {name:"light leather", rarities:["common", "uncommon","rare"], requirements:[
                {type:"skinning", tier: "II", name:"light hide", amount:2, raw: true},
                {type:"leatherworking", tier: "II", name:"tannin", amount:1, raw: true}]},
            {name:"light leather boots", rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3,}]},
            {name:"light leather belt", rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3,}]},
            {name:"light leather gloves", rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3,}]},
            {name:"light leather cap", rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:4,}]},
            {name:"light leather apron", rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:5,}]},
        ],
        //TIER 3
        III:[
            {name:"heavy leather", rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"skinning", tier: "III", name:"heavy hide", amount:3, raw: true},
                {type:"leatherworking", tier: "III", name:"rested tannin", amount:1, raw: true},
                {type:"leatherworking", tier: "II", name:"light leather", amount:1,}]},
            {name:"heavy leather boots", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3,}]},
            {name:"heavy leather belt", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3,}]},
            {name:"heavy leather gloves", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3,}]},
            {name:"heavy leather cap", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:4,}]},
            {name:"heavy leather apron", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:5,}]},
        ],
        //TIER 4
        IV:[
            {name:"rugged leather", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"skinning", tier: "IV", name:"rugged hide", amount:4, raw: true},
                {type:"leatherworking", tier: "IV", name:"aged tannin", amount:1, raw: true},
                {type:"leatherworking", tier: "III", name:"heavy leather", amount:1,}]},
            {name:"rugged leather boots", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3,}]},
            {name:"rugged leather belt", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3,}]},
            {name:"rugged leather gloves", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3,}]},
            {name:"rugged leather cap", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:4,}]},
            {name:"rugged leather apron", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:5,}]},
        ]
    },
    blacksmithing:{
        I:[
            {name:"bronze ingot", rarities:["common", "uncommon"], requirements:[
                {type:"mining", tier: "I", name: "copper ore", amount:1, raw: true}]}
        ],
        II:[
            {name:"iron ingot", rarities:["common", "uncommon","rare"], requirements:[
                {type:"mining", tier: "II", name: "iron ore", amount:2, raw: true},
                {type:"blacksmithing", tier: "II", name: "sand flux", amount:1, raw: true}]}
        ],
        III:[
            {name:"steel ingot", rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"mining", tier: "III", name: "coal", amount:3, raw: true},
                {type:"blacksmithing", tier: "III", name: "limestone flux", amount:1, raw: true},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:1,}]}
        ],
        IV:[
            {name:"silver ingot", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"mining", tier: "IV", name: "silver ore", amount:4, raw: true},
                {type:"blacksmithing", tier: "IV", name: "liquid flux", amount:1, raw: true},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:1,}]}
        ],
    },
    tailoring:{
        //TIER 1
        I:[
            {name:"linen cloth", rarities:["common", "uncommon"], requirements:[
                {type:"harvesting", tier: "I", name: "fiber", amount:1, raw: true}]},
            {name:"linen sash", rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:3,}]},
            {name:"linen gloves", rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:3,}]},
            {name:"linen bandana", rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:4,}]},
            {name:"linen shirt", rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:5,}]},
        ],
        //TIER 2
        II:[
            {name:"wool cloth", rarities:["common", "uncommon","rare"], requirements:[
                {type:"harvesting", tier: "II", name: "cotton", amount:2, raw: true},
                {type:"tailoring", tier: "II", name: "coarse thread", amount:1, raw: true}
            ]},
            {name:"wool sash", rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:3,}]},
            {name:"wool gloves", rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:3,}]},
            {name:"wool bandana", rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:4,}]},
            {name:"wool shirt", rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:5,}]},
        ],
        //TIER 3
        III:[
            {name:"sateen", rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"harvesting", tier: "III", name: "hemp", amount:3, raw: true},
                {type:"tailoring", tier: "III", name: "fine thread", amount:1, raw: true},
                {type:"tailoring", tier: "II", name: "wool cloth", amount:1,}
            ]},
            {name:"sateen sash", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:3,}]},
            {name:"sateen gloves", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:3,}]},
            {name:"sateen bandana", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:4,}]},
            {name:"sateen shirt", rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:5,}]},
        ],
        //TIER 4
        IV:[
            {name:"silk cloth", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"harvesting", tier: "IV", name: "silkweed", amount:4, raw: true},
                {type:"tailoring", tier: "IV", name: "silken thread", amount:1, raw: true},
                {type:"tailoring", tier: "III", name: "sateen", amount:1,}
            ]},
            {name:"silk sash", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:3,}]},
            {name:"silk gloves", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:3,}]},
            {name:"silk bandana", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:4,}]},
            {name:"silk shirt", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:5,}]},
        ]
    },
    woodworking:{
        I:[
            {name:"beech lumber", rarities:["common", "uncommon"], requirements:[
                {type:"logging", tier: "I", name: "beech log", amount:1, raw: true}]}
        ],
        II:[
            {name:"pine lumber", rarities:["common", "uncommon","rare"], requirements:[
                {type:"logging", tier: "II", name: "pine log", amount:2, raw: true},
                {type:"woodworking", tier: "II", name: "coarse sandpaper", amount:1, raw: true}]}
        ],
        III:[
            {name:"oak lumber", rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"logging", tier: "III", name: "oak log", amount:3, raw: true},
                {type:"woodworking", tier: "III", name: "rugged sandpaper", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:1,}]}
        ],
        IV:[
            {name:"birch lumber", rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"logging", tier: "IV", name: "birch log", amount:4, raw: true},
                {type:"woodworking", tier: "IV", name: "fine sandpaper", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:1,}]}
        ],
    },
    jewelcrafting:{
        I:[
            {name:"flint ring", rarities:["common"], requirements:[
                {type:"harvesting", tier: "I", name: "flint", amount:1, raw: true}]},
            {name:"bronze ring", rarities:["common","uncommon"], requirements:[
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:2,},
                {type:"jewelcrafting", tier: "I", name: "bronze wire", amount:1, raw: true}]},
            {name:"bronze earrings", rarities:["common","uncommon"], requirements:[
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:2,},
                {type:"jewelcrafting", tier: "I", name: "bronze wire", amount:1, raw: true}]},
            {name:"bronze necklace", rarities:["common","uncommon"], requirements:[
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:2,},
                {type:"jewelcrafting", tier: "I", name: "bronze chain", amount:1, raw: true}]},
        ],
        II:[
            {name:"cut emerald", rarities:["uncommon"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "weak solvent", amount:1, raw: true},
                {type:"mining", tier: "II", name: "emerald ore", amount:1, raw: true}]},
            {name:"iron ring", rarities:["common","uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "iron wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:2,}]},
            {name:"iron earrings", rarities:["common","uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "iron wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:2,}]},
            {name:"iron necklace", rarities:["common","uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "iron chain", amount:1, raw: true},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:2,}]},
            //FIRST PROBLEM. this need uncommon, rare ring but cant do that
            {name:"iron emerald ring", rarities:["uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "iron ring", amount:1,},
                {type:"jewelcrafting", tier: "II", name: "cut emerald", amount:1,}]},
            {name:"iron emerald earrings", rarities:["uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "iron earrings", amount:1,},
                {type:"jewelcrafting", tier: "II", name: "cut emerald", amount:1,}]},
            {name:"iron emerald necklace", rarities:["uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "iron necklace", amount:1,},
                {type:"jewelcrafting", tier: "II", name: "cut emerald", amount:1,}]},
        ],
        III:[
            {name:"cut amber", rarities:["uncommon"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "potent solvent", amount:1, raw: true},
                {type:"mining", tier: "III", name: "amber ore", amount:1, raw: true}]},
            {name:"cut brilliant ruby", rarities:["rare"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "potent solvent", amount:1, raw: true},
                {type:"mining", tier: "III", name: "brilliant ruby ore", amount:1, raw: true}]},
            {name:"steel ring", rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "steel wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:2,}]},
            {name:"steel earrings", rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "steel wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:2,}]},
            {name:"steel necklace", rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "steel chain", amount:1, raw: true},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:2,}]},
            //BELOW HERE RARITY
            {name:"steel amber ring", rarities:["uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut amber", amount:1,},
                {type:"jewelcrafting", tier: "III", name: "steel ring", amount:1,}]},
            {name:"steel amber earrings", rarities:["uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut amber", amount:1,},
                {type:"jewelcrafting", tier: "III", name: "steel earrings", amount:1,}]},
            {name:"steel brilliant ruby ring", rarities:["rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut brilliant ruby", amount:1,},
                {type:"jewelcrafting", tier: "III", name: "steel ring", amount:1,}]},
            {name:"steel amber necklace", rarities:["uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut amber", amount:1,},
                {type:"jewelcrafting", tier: "III", name: "steel necklace", amount:1,}]},
        ],
        IV:[
            {name:"cut pristine crystal", rarities:["epic"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "pure solvent", amount:1, raw: true},
                {type:"mining", tier: "IV", name: "pristine crystal ore", amount:1, raw: true}]},
            {name:"cut brilliant aquamarine", rarities:["rare"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "pure solvent", amount:1, raw: true},
                {type:"mining", tier: "IV", name: "brilliant aquamarine ore", amount:1, raw: true}]},
            {name:"cut celestine", rarities:["uncommon"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "pure solvent", amount:1, raw: true},
                {type:"mining", tier: "IV", name: "celestine ore", amount:1, raw: true}]},
            {name:"silver ring", rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "silver wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:2,}]},
            {name:"silver earrings", rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "silver wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:2,}]},
            {name:"silver necklace", rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "silver wire", amount:1, raw: true},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:2,}]},
            //below this, rarity
            {name:"silver celestine ring", rarities:["uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut celestine", amount:1,},
                {type:"jewelcrafting", tier: "IV", name: "silver ring", amount:1,}]},
            {name:"silver celestine earrings", rarities:["uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut celestine", amount:1,},
                {type:"jewelcrafting", tier: "IV", name: "silver earrings", amount:1,}]},
            {name:"silver celestine necklace", rarities:["uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut celestine", amount:1,},
                {type:"jewelcrafting", tier: "IV", name: "silver necklace", amount:1,}]},
            {name:"silver brilliant aquamarine ring", rarities:["rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut brilliant aquamarine", amount:1,},
                {type:"jewelcrafting", tier: "IV", name: "silver ring", amount:1,}]},
            {name:"silver pristine crystal earrings", rarities:["epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut pristine crystal", amount:1,},
                {type:"jewelcrafting", tier: "IV", name: "silver earrings", amount:1,}]},
        ]
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
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
            {name:"coarse leather", extraInfo:{progress:4,quality:2,durability:40}, rarities:["common", "uncommon"], requirements:[
                {type:"skinning", tier: "I", name: "raw hide", amount:1, raw: true}]},
            {name:"coarse leather boots", extraInfo:{progress:28,quality:2,durability:40}, rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3,}]},
            {name:"coarse leather belt", extraInfo:{progress:114,quality:14,durability:60}, rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3,}]},
            {name:"coarse leather gloves", extraInfo:{progress:240,quality:56,durability:60}, rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:3,}]},
            {name:"coarse leather cap", extraInfo:{progress:536,quality:268,durability:70}, rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:4,}]},
            {name:"coarse leather apron", extraInfo:{progress:1008,quality:504,durability:80}, rarities:["common", "uncommon"], requirements:[{type:"leatherworking", tier: "I", name:"coarse leather", amount:5,}]},
        ],
        //TIER 2
        II:[
            {name:"light leather", extraInfo:{progress:260,quality:130,durability:40}, rarities:["common", "uncommon","rare"], requirements:[
                {type:"skinning", tier: "II", name:"light hide", amount:2, raw: true},
                {type:"leatherworking", tier: "II", name:"tannin", amount:1, raw: true}]},
            {name:"light leather boots", extraInfo:{progress:844,quality:422,durability:60}, rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3,}]},
            {name:"light leather belt", extraInfo:{progress:978,quality:488,durability:60}, rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3,}]},
            {name:"light leather gloves", extraInfo:{progress:1122,quality:560,durability:60}, rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:3,}]},
            {name:"light leather cap", extraInfo:{progress:1702,quality:850,durability:70}, rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:4,}]},
            {name:"light leather apron", extraInfo:{progress:2400,quality:1200,durability:80}, rarities:["common", "uncommon","rare"], requirements:[{type:"leatherworking", tier: "II", name:"light leather", amount:5,}]},
        ],
        //TIER 3
        III:[
            {name:"heavy leather", extraInfo:{progress:508,quality:254,durability:40}, rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"skinning", tier: "III", name:"heavy hide", amount:3, raw: true},
                {type:"leatherworking", tier: "III", name:"rested tannin", amount:1, raw: true},
                {type:"leatherworking", tier: "II", name:"light leather", amount:1,}]},
            {name:"heavy leather boots", extraInfo:{progress:1612,quality:806,durability:60}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3,}]},
            {name:"heavy leather belt", extraInfo:{progress:1794,quality:892,durability:60}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3,}]},
            {name:"heavy leather gloves", extraInfo:{progress:1986,quality:992,durability:60}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:3,}]},
            {name:"heavy leather cap", extraInfo:{progress:2918,quality:1458,durability:70}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:4,}]},
            {name:"heavy leather apron", extraInfo:{progress:4000,quality:2000,durability:80}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"leatherworking", tier: "III", name:"heavy leather", amount:5,}]},
        ],
        //TIER 4
        IV:[
            {name:"rugged leather", extraInfo:{progress:836,quality:418,durability:40}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"skinning", tier: "IV", name:"rugged hide", amount:4, raw: true},
                {type:"leatherworking", tier: "IV", name:"aged tannin", amount:1, raw: true},
                {type:"leatherworking", tier: "III", name:"heavy leather", amount:1,}]},
            {name:"rugged leather boots", extraInfo:{progress:2620,quality:1310,durability:60}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3,}]},
            {name:"rugged leather belt", extraInfo:{progress:2850,quality:1424,durability:60}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3,}]},
            {name:"rugged leather gloves", extraInfo:{progress:3090,quality:1544,durability:60}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:3,}]},
            {name:"rugged leather cap", extraInfo:{progress:4454,quality:2226,durability:70}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:4,}]},
            {name:"rugged leather apron", extraInfo:{progress:6000,quality:3000,durability:70}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"leatherworking", tier: "IV", name:"rugged leather", amount:5,}]},
        ]
    },
    blacksmithing:{
        I:[
            {name:"bronze ingot", extraInfo:{progress:4,quality:2,durability:40}, rarities:["common", "uncommon"], requirements:[
                {type:"mining", tier: "I", name: "copper ore", amount:1, raw: true}]}
        ],
        II:[
            {name:"iron ingot", extraInfo:{progress:260,quality:130,durability:40}, rarities:["common", "uncommon","rare"], requirements:[
                {type:"mining", tier: "II", name: "iron ore", amount:2, raw: true},
                {type:"blacksmithing", tier: "II", name: "sand flux", amount:1, raw: true}]}
        ],
        III:[
            {name:"steel ingot", extraInfo:{progress:508,quality:254,durability:40}, rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"mining", tier: "III", name: "coal", amount:3, raw: true},
                {type:"blacksmithing", tier: "III", name: "limestone flux", amount:1, raw: true},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:1,}]}
        ],
        IV:[
            {name:"silver ingot", extraInfo:{progress:836,quality:418,durability:40}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"mining", tier: "IV", name: "silver ore", amount:4, raw: true},
                {type:"blacksmithing", tier: "IV", name: "liquid flux", amount:1, raw: true},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:1,}]}
        ],
    },
    tailoring:{
        //TIER 1
        I:[
            {name:"linen cloth", extraInfo:{progress:4,quality:2,durability:40}, rarities:["common", "uncommon"], requirements:[
                {type:"harvesting", tier: "I", name: "fiber", amount:1, raw: true}]},
            {name:"linen sash", extraInfo:{progress:28,quality:14,durability:60}, rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:3,}]},
            {name:"linen gloves", extraInfo:{progress:240,quality:120,durability:60}, rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:3,}]},
            {name:"linen bandana", extraInfo:{progress:536,quality:268,durability:70}, rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:4,}]},
            {name:"linen shirt", extraInfo:{progress:1008,quality:504,durability:80}, rarities:["common", "uncommon"], requirements:[{type:"tailoring", tier: "I", name:"linen cloth", amount:5,}]},
        ],
        //TIER 2
        II:[
            {name:"wool cloth", extraInfo:{progress:260,quality:130,durability:40}, rarities:["common", "uncommon","rare"], requirements:[
                {type:"harvesting", tier: "II", name: "cotton", amount:2, raw: true},
                {type:"tailoring", tier: "II", name: "coarse thread", amount:1, raw: true}
            ]},
            {name:"wool sash", extraInfo:{progress:844,quality:422,durability:60}, rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:3,}]},
            {name:"wool gloves", extraInfo:{progress:1122,quality:560,durability:60}, rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:3,}]},
            {name:"wool bandana", extraInfo:{progress:1702,quality:850,durability:70}, rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:4,}]},
            {name:"wool shirt", extraInfo:{progress:2400,quality:1200,durability:80}, rarities:["common", "uncommon","rare"], requirements:[{type:"tailoring", tier: "II", name:"wool cloth", amount:5,}]},
        ],
        //TIER 3
        III:[
            {name:"sateen", extraInfo:{progress:508,quality:254,durability:40}, rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"harvesting", tier: "III", name: "hemp", amount:3, raw: true},
                {type:"tailoring", tier: "III", name: "fine thread", amount:1, raw: true},
                {type:"tailoring", tier: "II", name: "wool cloth", amount:1,}
            ]},
            {name:"sateen sash", extraInfo:{progress:1612,quality:806,durability:60}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:3,}]},
            {name:"sateen gloves", extraInfo:{progress:1986,quality:992,durability:60}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:3,}]},
            {name:"sateen bandana", extraInfo:{progress:2918,quality:1458,durability:70}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:4,}]},
            {name:"sateen shirt", extraInfo:{progress:4000,quality:2000,durability:80}, rarities:["common", "uncommon","rare","epic"], requirements:[{type:"tailoring", tier: "III", name:"sateen", amount:5,}]},
        ],
        //TIER 4
        IV:[
            {name:"silk cloth", extraInfo:{progress:836,quality:418,durability:40}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
                {type:"harvesting", tier: "IV", name: "silkweed", amount:4, raw: true},
                {type:"tailoring", tier: "IV", name: "silken thread", amount:1, raw: true},
                {type:"tailoring", tier: "III", name: "sateen", amount:1,}
            ]},
            {name:"silk sash", extraInfo:{progress:2620,quality:1310,durability:60}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:3,}]},
            {name:"silk gloves", extraInfo:{progress:3090,quality:1544,durability:60}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:3,}]},
            {name:"silk bandana", extraInfo:{progress:4454,quality:2226,durability:70}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:4,}]},
            {name:"silk shirt", extraInfo:{progress:6000,quality:3000,durability:80}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[{type:"tailoring", tier: "IV", name:"silk cloth", amount:5,}]},
        ]
    },
    woodworking:{
        I:[
            {name:"beech lumber", extraInfo:{progress:4,quality:2,durability:40}, rarities:["common", "uncommon"], requirements:[
                {type:"logging", tier: "I", name: "beech log", amount:1, raw: true}]}
        ],
        II:[
            {name:"pine lumber", extraInfo:{progress:260,quality:130,durability:40}, rarities:["common", "uncommon","rare"], requirements:[
                {type:"logging", tier: "II", name: "pine log", amount:2, raw: true},
                {type:"woodworking", tier: "II", name: "coarse sandpaper", amount:1, raw: true}]}
        ],
        III:[
            {name:"oak lumber", extraInfo:{progress:508,quality:254,durability:40}, rarities:["common", "uncommon","rare","epic"], requirements:[
                {type:"logging", tier: "III", name: "oak log", amount:3, raw: true},
                {type:"woodworking", tier: "III", name: "rugged sandpaper", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:1,}]}
        ],
        IV:[
            {name:"birch lumber", extraInfo:{progress:836,quality:418,durability:40}, rarities:["common", "uncommon","rare","epic","legendary"], requirements:[
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
            {name:"iron emerald ring", rarities:["uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "cut emerald", amount:1,},
                {type:"jewelcrafting", tier: "II", rarities:["uncommon","rare"], name: "iron ring", amount:1,}]},
            {name:"iron emerald earrings", rarities:["uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "cut emerald", amount:1,},
                {type:"jewelcrafting", tier: "II", rarities:["uncommon","rare"], name: "iron earrings", amount:1,}]},
            {name:"iron emerald necklace", rarities:["uncommon","rare"], requirements:[
                {type:"jewelcrafting", tier: "II", name: "cut emerald", amount:1,},
                {type:"jewelcrafting", tier: "II", rarities:["uncommon","rare"], name: "iron necklace", amount:1,},]},      
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
            {name:"steel amber ring", rarities:["uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut amber", amount:1,},
                {type:"jewelcrafting", rarities:["uncommon","rare","epic"], tier: "III", name: "steel ring", amount:1,}]},
            {name:"steel amber earrings", rarities:["uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut amber", amount:1,},
                {type:"jewelcrafting", rarities:["uncommon","rare","epic"], tier: "III", name: "steel earrings", amount:1,}]},
            {name:"steel brilliant ruby ring", rarities:["rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut brilliant ruby", amount:1,},
                {type:"jewelcrafting", rarities:["rare"], tier: "III", name: "steel ring", amount:1,}]},
            {name:"steel amber necklace", rarities:["uncommon","rare","epic"], requirements:[
                {type:"jewelcrafting", tier: "III", name: "cut amber", amount:1,},
                {type:"jewelcrafting", rarities:["uncommon","rare","epic"], tier: "III", name: "steel necklace", amount:1,}]},
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
                {type:"jewelcrafting", rarities:["uncommon","rare","epic","legendary"], tier: "IV", name: "silver ring", amount:1,}]},
            {name:"silver celestine earrings", rarities:["uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut celestine", amount:1,},
                {type:"jewelcrafting", rarities:["uncommon","rare","epic","legendary"], tier: "IV", name: "silver earrings", amount:1,}]},
            {name:"silver celestine necklace", rarities:["uncommon","rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut celestine", amount:1,},
                {type:"jewelcrafting", rarities:["uncommon","rare","epic","legendary"], tier: "IV", name: "silver necklace", amount:1,}]},
            {name:"silver brilliant aquamarine ring", rarities:["rare","epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut brilliant aquamarine", amount:1,},
                {type:"jewelcrafting", rarities:["rare","epic","legendary"], tier: "IV", name: "silver ring", amount:1,}]},
            {name:"silver pristine crystal earrings", rarities:["epic","legendary"], requirements:[
                {type:"jewelcrafting", tier: "IV", name: "cut pristine crystal", amount:1,},
                {type:"jewelcrafting", rarities:["epic","legendary"], tier: "IV", name: "silver earrings", amount:1,}]},
        ]
    },
    engineering:{
        I:[
            {name:"flint harvesting sickle", extraInfo:{progress:30,quality:14,durability:80}, rarities:["common"], requirements:[
                {type:"harvesting", tier: "I", name: "flint", amount:2, raw: true},
                {type:"logging", tier: "I", name: "beech log", amount:1, raw: true}]},
            {name:"flint logging axe", extraInfo:{progress:30,quality:14,durability:80}, rarities:["common"], requirements:[
                {type:"harvesting", tier: "I", name: "flint", amount:2, raw: true},
                {type:"logging", tier: "I", name: "beech log", amount:1, raw: true}]},
            {name:"flint mining pickaxe", extraInfo:{progress:30,quality:14,durability:80}, rarities:["common"], requirements:[
                {type:"harvesting", tier: "I", name: "flint", amount:2, raw: true},
                {type:"logging", tier: "I", name: "beech log", amount:1, raw: true}]},
            {name:"flint skinning knife", extraInfo:{progress:30,quality:14,durability:80}, rarities:["common"], requirements:[
                {type:"harvesting", tier: "I", name: "flint", amount:2, raw: true},
                {type:"logging", tier: "I", name: "beech log", amount:1, raw: true}]},
            {name:"bronze harvesting sickle", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7}]},
            {name:"bronze engineering hammer", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze mining pickaxe", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze tailoring needle", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze logging axe", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze leatherworking knife", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze blacksmithing hammer", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze skinning knife", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
            {name:"bronze woodworking saw", extraInfo:{progress:1680,quality:840,durability:80}, rarities:["common","uncommon"], requirements:[
                {type:"leatherworking", tier: "I", name: "coarse leather", amount:7},
                {type:"blacksmithing", tier: "I", name: "bronze ingot", amount:7},
                {type:"logging", tier: "I", name: "beech tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "I", name: "beech lumber", amount:7,}]},
        ],
        II:[
            {name:"iron nut", extraInfo:{progress:260,quality:130,durability:40}, rarities:["common","uncommon","rare"], requirements:[
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:1}]},
            {name:"iron harvesting sickle", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron engineering hammer", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron mining pickaxe", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron tailoring needle", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron logging axe", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron leatherworking knife", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron blacksmithing hammer", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron skinning knife", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
            {name:"iron woodworking saw", extraInfo:{progress:3360,quality:1640,durability:80}, rarities:["common","uncommon","rare"], requirements:[
                {type:"leatherworking", tier: "II", name: "light leather", amount:7},
                {type:"blacksmithing", tier: "II", name: "iron ingot", amount:7},
                {type:"logging", tier: "II", name: "pine tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "II", name: "pine lumber", amount:7,}]},
        ],
        III:[
            {name:"steel nut", extraInfo:{progress:508,quality:254,durability:40}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:1}]},
            {name:"steel harvesting sickle", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel engineering hammer", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel mining pickaxe", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel tailoring needle", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel logging axe", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel leatherworking knife", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel blacksmithing hammer", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel skinning knife", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
            {name:"steel woodworking saw", extraInfo:{progress:5600,quality:2800,durability:80}, rarities:["common","uncommon","rare","epic"], requirements:[
                {type:"leatherworking", tier: "III", name: "heavy leather", amount:7},
                {type:"blacksmithing", tier: "III", name: "steel ingot", amount:7},
                {type:"logging", tier: "III", name: "oak tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "III", name: "oak lumber", amount:7,}]},
        ],
        IV:[
            {name:"silver nut", extraInfo:{progress:836,quality:418,durability:40}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:1}]},
            {name:"silver harvesting sickle", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver engineering hammer", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver mining pickaxe", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver tailoring needle", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver logging axe", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver leatherworking knife", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver blacksmithing hammer", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver skinning knife", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
            {name:"silver woodworking saw", extraInfo:{progress:8400,quality:4200,durability:80}, rarities:["common","uncommon","rare","epic","legendary"], requirements:[
                {type:"leatherworking", tier: "IV", name: "rugged leather", amount:7},
                {type:"blacksmithing", tier: "IV", name: "silver ingot", amount:7},
                {type:"logging", tier: "IV", name: "birch tree sap", amount:1, raw: true},
                {type:"woodworking", tier: "IV", name: "birch lumber", amount:7,}]},
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
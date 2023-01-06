import  {rarityColor, crafts, craftSearch, searchRawMaterials} from "./assets/Crafts.js"
import { useState } from "react"
export default function Calculator()
{
    //console.log(testRecursiveCraftBlueprint("leatherworking","coarse leather boots",false))
    const [craftOption, setcraftOption] = useState({type:"leatherworking", tier:"I", name:"coarse leather", amount:1})
    //main function to handle user input
    function handleOptionChange(event)
    {
      setcraftOption(oldCraftOption => {
        return {
          ...oldCraftOption,
          //this is for changing the amount textbox
          [event.target.name]: event.target.value,
          /**
           * The reason for this is there're 3 cases where a name would need to be updated. 
           *  if it a tier change, the name need to update to the first object of the same type in the new tier
           *  if it a type change, the name need to update to the first object of the new type in the same tier
           *  if it a name change, the name is the same as above, it literally the same thing happend twice ([event.target.name]: event.target.value)
           *  if it a amount change, then the assignment above take care of it, and this function will return the old name
           */
          name: (function(){
            if (event.target.name == "tier")
            {
              return crafts[oldCraftOption.type][event.target.value][0].name
            } 
            else if(event.target.name == "type")
            {
              return crafts[event.target.value][oldCraftOption.tier][0].name
            }
            else if(event.target.name == "name")
            {
              return event.target.value
            }
            else
            {
              return oldCraftOption.name
            }
          }())
        }
      })
    }   
    return <section className="calculator">
        {/*THIS USES CRAFTS OBJECTS*/}
        <div className="calculator--option">
            <select name="type" onChange={(event) => handleOptionChange(event)} value={craftOption.type}>
              {Object.getOwnPropertyNames(crafts).map(profession => <option value={profession}>{profession}</option>)}
            </select>
            <select name="tier" onChange={(event) => handleOptionChange(event)} value={craftOption.tier}>
              {Object.getOwnPropertyNames(crafts[craftOption.type]).map(tier => <option value={tier}>{tier}</option>)}
            </select>
            <input name="amount" className="option--amount" type="text" value={craftOption.amount} onChange={(event) => handleOptionChange(event)}></input>
            <select name="name" onChange={(event) => handleOptionChange(event)} value={craftOption.name}>
              {crafts[craftOption.type][craftOption.tier].map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{craft.name}</option> : undefined))}
            </select>
        </div>
        {createCraftBluePrint(craftOption.type, craftOption.tier, craftOption.name, craftOption.amount, false)}
        <div className="materialRarity"></div>
  </section>
}
function createIngredientDiv(material, amount) {
  return <div className="ingredients">
    {/*material color to name to amount*/}
    {material.rarities.map(rarity => (<span className="materialRarity" style={{backgroundColor: rarityColor[rarity]}}/>))}
    <span>{material.name}</span>
    <span>x{amount}</span>
  </div>
}
{/*THIS USES searchRawMaterials, craftSearch*/}
//recursive blueprint generator
function createCraftBluePrint(type, tier, name, amount, rawFlag)
{
  //in the event that the name is a raw material. the tier is not needed but it is in the requirements anyway
  //may need to add tier to raw material but i dont think that nessessary
  if(rawFlag)
  {
    //query debug
    //console.log(type, name)
    const material = searchRawMaterials(type, name)
    return createIngredientDiv(material, amount)
  }
  else{
    //query debug
    //console.log(type, tier, name)
    let material = craftSearch(type, tier, name)
    const child = material.requirements.map(requirement => createCraftBluePrint(type = requirement.type, requirement.tier, requirement.name, amount * requirement.amount, requirement.raw))
    return <div className='steps'>
      {/* <div className="ingredients">
        <span>{craft.name}</span>
        <span>x{amount}</span>
      </div> */}
      {createIngredientDiv(material, amount)}
      <div>{child}</div>
    </div>
  }
}

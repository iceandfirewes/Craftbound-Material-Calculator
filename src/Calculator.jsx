import  {crafts, craftSearch, searchRawMaterials} from "./assets/Crafts.js"
import { useState } from "react"
export default function Calculator()
{
    //console.log(testRecursiveCraftBlueprint("leatherworking","coarse leather boots",false))
    const [craftOption, setcraftOption] = useState({type:"leatherworking", tier:"I", name:"coarse leather", amount:1})
    //main function to handle user input
    function handleOptionChange(event)
    {
        /**
         * The reason for 2 return statement here is that if the tier is changed, the name need to be changed also
         * if it isnt changed, it would look up a tier I item in the tier II array, which break
         */
        setcraftOption(oldCraftOption => {
          //tier change
          if(event.target.name == "tier")
          {
            return {
              ...oldCraftOption,
              [event.target.name]: event.target.value,
              name: crafts[oldCraftOption.type][event.target.value][0].name
            }
          }
          //everything else
          else
          {
            return {
              ...oldCraftOption,
              [event.target.name]: event.target.value,
            }
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
            <input name="amount" type="text" value={craftOption.amount} onChange={(event) => handleOptionChange(event)}></input>
            <select name="name" onChange={(event) => handleOptionChange(event)} value={craftOption.name}>
              {/*test later once add more professions*/}
              {crafts[craftOption.type][craftOption.tier].map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{craft.name}</option> : undefined))}
            </select>
        </div>
        {/*createCraftBlueprint(craftOption.name, craftOption.amount)*/}
        {createCraftBluePrint(craftOption.type, craftOption.tier, craftOption.name, craftOption.amount, false)}
  </section>
}
{/*THIS USES searchRawMaterials, craftSearch*/}
//recursive blueprint generator
function createCraftBluePrint(type, tier, name, amount, rawFlag)
{
  //in the event that the name is a raw material. the tier is not needed but it is in the requirements anyway
  //may need to add tier to raw material but i dont think that nessessary
  if(rawFlag)
  {
    let rawMaterial = searchRawMaterials(type, name)
    return <div className="ingredients">
    <span>{rawMaterial.name}</span>
    <span>x{amount}</span>
    <input type="checkbox"></input>
    </div>
  }
  else{
    let craft = craftSearch(type, tier, name)
    const child = craft.requirements.map(requirement => createCraftBluePrint(type = requirement.type, requirement.tier, requirement.name, amount * requirement.amount, requirement.raw))
    return <div className='steps'>
      <div className="ingredients">
        <span>{name}</span>
        <span>x{amount}</span>
      </div>
      <div>{child}</div>
    </div>
  }
}

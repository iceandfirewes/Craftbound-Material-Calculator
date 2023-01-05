import  {crafts, craftSearch, searchRawMaterials} from "./assets/Crafts.js"
import { useState } from "react"
export default function Calculator()
{
    //console.log(testRecursiveCraftBlueprint("leatherworking","coarse leather boots",false))
    const [craftOption, setcraftOption] = useState({type:"leatherworking", name:"coarse leather", amount:1})
    function handleOptionChange(event)
    {
        setcraftOption(oldCraftOption => {
          console.log(event.target.name)
            return {
                ...oldCraftOption,
                [event.target.name]: event.target.value
            }
        })
    }   
    return <section className="calculator">
        {/*THIS USES CRAFTS OBJECTS*/}
        <div className="calculator--option">
            <select name="type" onChange={(event) => handleOptionChange(event)} value={craftOption.name}>
              {Object.getOwnPropertyNames(crafts).map(profession => <option value={profession}>{profession}</option>)}
            </select>
            <input name="amount" type="text" value={craftOption.amount} onChange={(event) => handleOptionChange(event)}></input>
            <select name="name" onChange={(event) => handleOptionChange(event)} value={craftOption.name}>
              {/*test later once add more professions*/}
              {crafts[craftOption.type].map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{craft.name}</option> : undefined))}
            </select>
        </div>
        {/*createCraftBlueprint(craftOption.name, craftOption.amount)*/}
        {createCraftBluePrint(craftOption.type,craftOption.name, craftOption.amount, false)}
  </section>
}
{/*THIS USES searchRawMaterials, craftSearch*/}
function createCraftBluePrint(type, name, amount, rawFlag)
{
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
    let craft = craftSearch(type, name)
    const child = craft.requirements.map(requirement => createCraftBluePrint(requirement.type, requirement.name, amount * requirement.amount, requirement.raw))
    return <div className='steps'>
      <div className="ingredients">
        <span>{name}</span>
        <span>x{amount}</span>
      </div>
      <div>{child}</div>
    </div>
  }
}

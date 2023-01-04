import  {crafts, craftSearch} from "./assets/Crafts.js"
import { useState } from "react"
export default function Calculator()
{
    const [craftOption, setcraftOption] = useState({name:"light leather", amount:1})
    function handleOptionChange(event)
    {
        setcraftOption(oldCraftOption => {
            return {
                ...oldCraftOption,
                [event.target.name]: event.target.value
            }
        })
    }   
    return <section className="calculator">
        <div className="calculator--option">
            <input name="amount" className="option--amount" type="text" value={craftOption.amount} onChange={(event) => handleOptionChange(event)}></input>
            <select name="name" onChange={(event) => handleOptionChange(event)} value={craftOption.name}>
                {/* probably better to put another dropdown to filter out non leather working */}
                {crafts.map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{craft.name}</option> : undefined))}
            </select>
        </div>
        {createCraftBlueprint(craftOption.name, craftOption.amount)}
  </section>
}
function createCraftBlueprint(name, amount)
{
  let craft = craftSearch(name, amount)
  if(!craft.hasOwnProperty('requirements'))
  {
    return <div className="ingredients">
    <span>{name}</span>
    <span>x{amount}</span>
    <input type="checkbox"></input>
  </div>
  }
  else
  {
    const child = craft.requirements.map(requirement => createCraftBlueprint(requirement.name, amount * requirement.amount))
    return <div className='steps'>
        <div className="ingredients">
            <span>{name}</span>
            <span>x{amount}</span>
        </div>
      <div>{child}</div>
    </div>
  }
}

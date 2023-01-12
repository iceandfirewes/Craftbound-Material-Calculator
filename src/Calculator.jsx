import  {rarityColor, crafts, craftSearch, searchRawMaterials} from "./assets/Crafts.js"
import { useState } from "react"
export default function Calculator()
{
    //console.log(testRecursiveCraftBlueprint("leatherworking","coarse leather boots",false))
    const [craftOption, setcraftOption] = useState(() => {
      const tempCraftOption = localStorage.getItem("craftOption")
      return tempCraftOption ? JSON.parse(tempCraftOption) : {type:"leatherworking", tier:"I", name:"coarse leather", amount:1}
    })
    // debug 
    // const [isHovered, setIsHovered] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    //main function to handle user input
    return <>
      {createOptionDiv()}
      <div className="calculator--display">
        {createCraftBluePrint(craftOption.type, craftOption.tier, craftOption.name, craftOption.amount, false)}
      </div>
      <div className="update">1/12 - display PQD for LW</div>
    </>
    function handleOptionChange(event)
    {
      setcraftOption(oldCraftOption => {
        const newCraftOption = {
          ...oldCraftOption,
          //this is for changing the amount textbox
          //!isNaN(event.target.value) && event.target.name == "amount"?  event.target.value : oldCraftOption.amount this cause crash bug
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
              //toLowerCase because type value is capitalized
              return crafts[event.target.value.toLowerCase()][oldCraftOption.tier][0].name
            }
            else if(event.target.name == "name")
            {
              //toLowerCase because name value is capitalized
              return event.target.value.toLowerCase()
            }
            else if(event.target.name == "amount")
            {
              return oldCraftOption.name
            }
          }())  
        }
        localStorage.setItem("craftOption", JSON.stringify(newCraftOption))
        return newCraftOption
      })
    }
    function createOptionDiv()
    {
      return <div className="calculator--option">
      <select name="type" onChange={(event) => handleOptionChange(event)} value={craftOption.type}>
        {Object.getOwnPropertyNames(crafts).map(profession => <option value={profession}>{capitalizeEveryWord(profession)}</option>)}
      </select>
      <select name="tier" onChange={(event) => handleOptionChange(event)} value={craftOption.tier}>
        {Object.getOwnPropertyNames(crafts[craftOption.type]).map(tier => <option value={tier}>{tier}</option>)}
      </select>
      <input name="amount" className="option--amount" type="text" value={craftOption.amount} onChange={(event) => handleOptionChange(event)}></input>
      <select name="name" onChange={(event) => handleOptionChange(event)} value={craftOption.name}>
        {crafts[craftOption.type][craftOption.tier].map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{capitalizeEveryWord(craft.name)}</option> : undefined))}
      </select>
    </div>
    }
    function createIngredientDiv(material, amount, raritiesRequest) {
      /**decide which rarity to use. the item ornate rarity or the request rarity from a parent craft
       *  + if there's no rarityRequest do the circle as usual
       *  + if there is, need to display an arrow with the circle excluding the first circle
       * */
      let raritiesDisplay
      if(raritiesRequest != undefined)
      {
        const [, ...raritiesRequestExceptFirst] = raritiesRequest
        raritiesDisplay = <>
          <span className="rarityRequestArrow" style={{borderColor:rarityColor[raritiesRequest[0]]}}></span>
          {raritiesRequestExceptFirst.map(rarity => (<span className="rarity" style={{backgroundColor: rarityColor[rarity]}}/>))}
        </>
      }
      else
      {
        raritiesDisplay = <>
          {material.rarities.map(rarity => (<span className="rarity" style={{backgroundColor: rarityColor[rarity]}}/>))}  
        </>
      }
      return <div className="ingredient--NAR">
        {/*material color to name to amount*/}
        <div>{capitalizeEveryWord(material.name)}</div>
        <div className="ingredients--amount">x{amount}</div>
        {raritiesDisplay}
      </div>
    }    
    /**recursive blueprint generator
     * rawFlag
     *  default to false if undefined is passed(requirement that need a non-raw will not have a raw property) rawFlag would be false
     *  if true is passed(requirement that need a raw will have a raw property) rawFlag would be true
     * raritiesRequest is for craft that want to override a material rarity. for example, if an item is uncommon -> legendary but 
     * the craft only want rare -> legendary
     *  default to undefined. most craft does not have a rarities field in their requirement object aside from jw
    *   if passed down to createIngrediantDiv, it will either be undefined OR ["common","uncommon",...]
  * */
    function createCraftBluePrint(type, tier, name, amount, rawFlag = false, raritiesRequest = undefined)
    {
      //in the event that the name is a raw material. the tier is not needed but it is in the requirements anyway
      //may need to add tier to raw material but i dont think that nessessary
      if(rawFlag)
      {
        //console.log(type, name)
        const material = searchRawMaterials(type, name)
        return createIngredientDiv(material, amount, raritiesRequest)
      }
      else{
        //console.log(type, tier, name)
        let material = craftSearch(type, tier, name)
        //
        let extraInfo = undefined
        if (isHovered && material.hasOwnProperty("extraInfo"))
        {
          extraInfo = material.extraInfo
          extraInfo = <div className="ingredient--PQD">
            <span>P:{extraInfo.progress}</span>
            <span>Q:{extraInfo.quality}</span>
            <span>D:{extraInfo.durability}</span>
          </div>
        }
        //
        const child = material.requirements.map(requirement => createCraftBluePrint(requirement.type, requirement.tier, requirement.name, amount * requirement.amount, requirement.raw, requirement.rarities))
        return <div className='steps'>
          <div className="ingredient" onMouseOver={() => {setIsHovered(true)}} onMouseOut={() => {setIsHovered(false)}}>
          {/* <div className="ingredient" onMouseOver={() => {setIsHovered(false)}} onMouseOut={() => {setIsHovered(true)}}> */}
            {createIngredientDiv(material, amount, raritiesRequest)}
            {extraInfo}
          </div>
          <div>{child}</div>
        </div>
      }
    }
}
function capitalizeEveryWord(string)
{
  const arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
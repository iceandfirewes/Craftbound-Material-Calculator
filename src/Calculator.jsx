import  {rarityColor, crafts, craftSearch, searchRawMaterials} from "./assets/Crafts.js"
import { useState } from "react"
import { motion } from "framer-motion"
export default function Calculator()
{
    //console.log(testRecursiveCraftBlueprint("leatherworking","coarse leather boots",false))
    const [craftOption, setcraftOption] = useState(() => {
      const tempCraftOption = localStorage.getItem("craftOption")
      return tempCraftOption ? JSON.parse(tempCraftOption) : {type:"leatherworking", tier:"I", name:"coarse leather", amount:1}
    })
    const [setting, setSetting] = useState({hovered:false, mode:"simple"})
    //main function to handle user input
    return <div className="calculator">
      <div className="calculator--option">{createOptionDiv()}</div>
      <div className="calculator--display">
        {createCraftBluePrint(craftOption.type, craftOption.tier, craftOption.name, craftOption.amount, false, undefined, true)}
      </div>
    </div>
    function handleCraftOptionChange(event)
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
    function handleSettingChange(name, value)
    {
      setSetting(old => 
        ({...old, [name]:value}))
    }
    function createOptionDiv()
    {
      return <>
      {/* <div className="switch" mode={setting.mode} onClick={handleSettingChange("mode", setting.mode == "simple" ? "detail" : "simple")}> */}
      <div className="option--mode">
        Simple
        <div className="mode--switch" mode={setting.mode} 
          onClick={() => handleSettingChange("mode", setting.mode == "simple" ? "detail" : "simple")}
          style={{justifyContent: setting.mode == "simple"? "flex-start" : "flex-end"}}>
          <motion.div className="switch--button" layout transition={{
            type: "spring",
            stiffness: 700,
            damping: 30}}/>
        </div>
        Detail
      </div>
      <select name="type" onChange={(event) => handleCraftOptionChange(event)} value={craftOption.type}>
        {Object.getOwnPropertyNames(crafts).map(profession => <option value={profession}>{capitalizeEveryWord(profession)}</option>)}
      </select>
      <select name="tier" onChange={(event) => handleCraftOptionChange(event)} value={craftOption.tier}>
        {Object.getOwnPropertyNames(crafts[craftOption.type]).map(tier => <option value={tier}>{tier}</option>)}
      </select>
      <input name="amount" className="option--amount" type="text" value={craftOption.amount} onChange={(event) => handleCraftOptionChange(event)}></input>
      <select name="name" onChange={(event) => handleCraftOptionChange(event)} value={craftOption.name}>
        {crafts[craftOption.type][craftOption.tier].map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{capitalizeEveryWord(craft.name)}</option> : undefined))}
      </select>
    </>
    }
    function createIngredientDiv(material, amount, raritiesRequest, firstFlag) {
      /**decide which rarity to use. the item ornate rarity or the request rarity from a parent craft
       *  + if there's no rarityRequest do the circle as usual
       *  + if there is, need to display an arrow with the circle excluding the first circle
       * */
      let raritiesDisplay
      if(raritiesRequest != undefined)
      {
        const [, ...raritiesRequestExceptFirst] = raritiesRequest
        raritiesDisplay = <>
          <span className="NAR--arrow" style={{borderColor:rarityColor[raritiesRequest[0]]}}></span>
          {raritiesRequestExceptFirst.map(rarity => (<span className="NAR--rarity" style={{backgroundColor: rarityColor[rarity]}}/>))}
        </>
      }
      else
      {
        raritiesDisplay = <>
          {material.rarities.map(rarity => (<span className="NAR--rarity" style={{backgroundColor: rarityColor[rarity]}}/>))}  
        </>
      }
      // style={firstFlag ? undefined : {border: "solid", borderWidth: "0 0 0 .2em"}}
      // If the div is the first, ie, the leftmost craft in the tree. then dont display the border, else display it
      return <div className="ingredient--NAR" style={firstFlag ? undefined : {border: "solid", borderWidth: "0 0 0 .1em"}}>
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
     *  if passed down to createIngrediantDiv, it will either be undefined OR ["common","uncommon",...]
     * firstFlag is when if called from the mainPage, a true value will be passed so when the createIngredientDiv is runned, it will not
     *  render a border. Notice how {createIngredientDiv(material, amount, raritiesRequest, firstFlag)} is the only line that pass
     *  along the true firstFlag, it will render the left most blueprint and then not pass a value down to it childs, defaulting to false
     *  and thus, all the blueprint aside from the first will have a border
  * */
    function createCraftBluePrint(type, tier, name, amount, rawFlag = false, raritiesRequest = undefined, firstFlag = false)
    {
      //in the event that the name is a raw material. the tier is not needed but it is in the requirements anyway
      //may need to add tier to raw material but i dont think that nessessary
      if(rawFlag)
      {
        //console.log(type, name)
        const material = searchRawMaterials(type, name)
        return <div className="ingredient">{createIngredientDiv(material, amount, raritiesRequest)}</div>
      }
      else{
        //console.log(type, tier, name)
        let material = craftSearch(type, tier, name)
        //
        let extraInfo = undefined
        if (setting.mode == "detail" && setting.hovered && material.hasOwnProperty("extraInfo"))
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
        return <div className='steps' onMouseOver={() => {handleSettingChange("hovered", true)}} onMouseOut={() => {handleSettingChange("hovered", false)}}>
          <div className="ingredient">
            {createIngredientDiv(material, amount, raritiesRequest, firstFlag)}
            {extraInfo}
          </div>
          <span className="steps--arrow"></span>
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
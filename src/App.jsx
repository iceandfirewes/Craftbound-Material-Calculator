import { useState } from 'react'
import  {crafts, craftSearch} from "./assets/Crafts.js"
function App() {
  //console.log(createCraftBlueprint("rugged leather", 1))

  //horizontal. < img - craft name - craft amount >
  function createCraft(name, amount)
  {
    return <div className="ingredients">
        <span>{name}</span>
        <span>x{amount}</span>
      </div>
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
      console.log(child)
      return <div className='steps'>
        {createCraft(name, amount)}
        <div>{child}</div>
        {/*<div>{craft.requirements.map(requirement => createCraft(requirement.name, requirement.amount))()}</div>*/}
      </div>
    }
  }
  return (
    <div className="App">
      <h1>This is a simple calculator to tell how much material is needed for a given craft</h1>
      <section className="calculator">
        <div>
          <select name="craft-selector">
            
            {//sync to a state first
              //need it to sync with below. im thinking a state 
            crafts.map(craft => (craft.hasOwnProperty("requirements") ? <option value={craft.name}>{craft.name}</option> : undefined))}
          </select>
        </div>
        {/* state here */}
        {createCraftBlueprint("rugged leather boots", 3000)}
      </section>
    </div>
  )
}

export default App

export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) { // hey dipshit, don't forget that it's looking for the type 
    case "ADD_PET":
      return Object.assign({}, state, {pets: [...state.pets, action.pet]})
    case "REMOVE_PET":
      return Object.assign({}, state, {pets: state.pets.filter(pet => pet.id !== action.id)})
    default: 
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = state.pets.map(pet => `<li>${pet.name}</li>`).join("")
  document.getElementById("container").innerHTML = `<ul>${pets}</ul>`
}

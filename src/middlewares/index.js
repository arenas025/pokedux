export const middleware = (store) => (next) => (action) => {
    next(action)
}

export const number = (store) => (next) => (action) => {
    let arrayPokeWithNumber = [...action.action.payload] 
    for (let i = 0 ; i < arrayPokeWithNumber.length; i++) {
        arrayPokeWithNumber[i].name = `${[i]} - ${arrayPokeWithNumber[i].name}` 
    }
    const newFeature = {
        ...action,
        action:{...action.action, payload: arrayPokeWithNumber}
    }
    next(newFeature)
}

const capitalize = (store) => (next) => (action) => {
    const arrayNormal = [...action.action.payload]
    const firstLetter = []
    arrayNormal.map(pokemon => 
            pokemon.abilities.map
                (item=> firstLetter.push(item.ability.name.slice(0,1).toUpperCase())))
    arrayNormal.map(pokemon =>{ 
        for (let i = 0; i < pokemon.abilities.length; i++) {
            const letter = firstLetter[i]
            // pokemon.abilities[i].ability.name = `${firstLetter[i]}${pokemon.abilities[i].ability.name.slice(1,pokemon.abilities[i].ability.name.length)}`
        }})
        console.log(firstLetter.length)
        // pokemon.abilities.map
        //     (item=> console.log((item.ability.name).split('').splice(0,1,))))
    // console.log(arrayNormal[0].abilities[0].ability.name)

}
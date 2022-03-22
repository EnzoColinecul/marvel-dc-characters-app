export const getCharacterById = (id, fullData) => {

  return fullData.find(character => character.id === id)
}

export const getCharacterById = (id, fullData) => {

  return fullData.find(hero => hero.id === id)
}

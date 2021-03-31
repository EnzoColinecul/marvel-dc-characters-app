export const getCharacterByPublisher = (publisher, fullData) => {
  const validPublisher = ['Marvel Comics', 'DC Comics']

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no es correcto`)
  }

  return fullData.filter(hero => hero.biography.publisher === publisher)

}
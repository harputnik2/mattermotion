import {
  categories,
  VISUALIZATIONS_IDS,
  ANIMATIONS_IDS,
  VIRTUAL_TOURS_IDS,
} from 'consts'

export const findQuery = (category) => {
  return category === categories.VISUALIZATIONS ?
    VISUALIZATIONS_IDS :
    category === categories.ANIMATIONS ?
      ANIMATIONS_IDS :
      VIRTUAL_TOURS_IDS
}

export const getPrevAndNextId = (idsArray, currentId) => {
  const idsArrayLength = idsArray.length
  const currentIdIndex = idsArray.indexOf(currentId)

  const prevIdIndex = currentIdIndex === 0 ?
    idsArrayLength - 1 :
    currentIdIndex - 1

  const nextIdIndex = currentIdIndex === idsArrayLength - 1 ?
    0 :
    currentIdIndex + 1

  return {
    prevId: idsArray[prevIdIndex],
    nextId: idsArray[nextIdIndex],
  }
}

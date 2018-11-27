export const clickerTypes = {
  UPDATE_CLICKS: 'UPDATE_CLICKS',
  INCREASE_MULTIPLIER: 'INCREASE_MULTIPLIER'
}

export const increment = () => {
  return {
    type: clickerTypes.UPDATE_CLICKS,
    payload: {
      amount: 1
    }
  }
}

export const increaseMultiplier = (amount, cost) => {
  return {
    type: clickerTypes.INCREASE_MULTIPLIER,
    payload: {
      amount,
      cost
    }
  }
}
import { NameSpace } from '../../root-reducer';

const getFilteredCards = (state) =>
  state[NameSpace.FILTERED_CARDS].filteredCards;

export { getFilteredCards };

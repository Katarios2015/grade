import { NameSpace } from '../../root-reducer';

const getFilteredCards = (state) => state[NameSpace.FiltredCards].filteredCards;

export { getFilteredCards };

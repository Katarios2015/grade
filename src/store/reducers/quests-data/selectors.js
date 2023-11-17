import { NameSpace } from '../../root-reducer';

const getCards = (state) => state[NameSpace.Cards].cards;
const getDataLoaded = (state) => state[NameSpace.Cards].isDataLoaded;

export { getCards, getDataLoaded };

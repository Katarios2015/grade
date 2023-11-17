import { NameSpace } from '../../root-reducer';

const getCard = (state) => state[NameSpace.QuestCard].card;
const getCardDataLoaded = (state) =>
  state[NameSpace.QuestCard].isCardDataLoaded;

export { getCard, getCardDataLoaded };

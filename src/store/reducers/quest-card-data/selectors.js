import {NameSpace} from "../../root-reducer";

const getCards = (state) => state[NameSpace.QUEST_CARD].card;
const getCardDataLoaded = (state) => state[NameSpace.QUEST_CARD].isCardDataLoaded;

export {getCards, getCardDataLoaded};

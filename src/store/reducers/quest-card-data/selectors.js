import {NameSpace} from "../../root-reducer";

const getCard = (state) => state[NameSpace.QUEST_CARD].card;
const getCardDataLoaded = (state) => state[NameSpace.QUEST_CARD].isCardDataLoaded;

export {getCard, getCardDataLoaded};

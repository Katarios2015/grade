import {NameSpace} from "../../root-reducer";

const getCards = (state) => state[NameSpace.CARDS].cards;
const getDataLoaded = (state) => state[NameSpace.CARDS].isDataLoaded;

export {getCards, getDataLoaded};

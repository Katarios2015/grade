import { combineReducers } from 'redux';
import { CardData } from './reducers/quest-card-data/quest-card-data';
import { QuestsData } from './reducers/quests-data/quests-data';

const NameSpace = {
  CARDS: `CARDS`,
  QUEST_CARD: `CARD`,
};

export { NameSpace };

export default combineReducers({
  [NameSpace.CARDS]: QuestsData,
  [NameSpace.QUEST_CARD]: CardData,
});

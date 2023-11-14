import { combineReducers } from 'redux';
import { CardData } from './reducers/quest-card-data/quest-card-data';
import { QuestsData } from './reducers/quests-data/quests-data';
import { CardUrlId } from './reducers/url-id/url-id';

const NameSpace = {
  CARDS: `CARDS`,
  QUEST_CARD: `CARD`,
  URL_ID: `URL_ID`,
};

export { NameSpace };

export default combineReducers({
  [NameSpace.CARDS]: QuestsData,
  [NameSpace.QUEST_CARD]: CardData,
  [NameSpace.URL_ID]: CardUrlId,
});

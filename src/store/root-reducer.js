import { combineReducers } from 'redux';
import { CardData } from './reducers/quest-card-data/quest-card-data';
import { QuestsData } from './reducers/quests-data/quests-data';
import { CardUrlId } from './reducers/url-id/url-id';
import { filter } from './reducers/filter/filter';
import { cardFiltered } from './reducers/filtred-quests/filtred-quests';
import { modalToggle } from './reducers/modal/modal';

const NameSpace = {
  CARDS: `CARDS`,
  QUEST_CARD: `CARD`,
  URL_ID: `URL_ID`,
  FILTER: `FILTER`,
  FILTERED_CARDS: `FILTERED_CARDS`,
  TOGGLE_MODAL: `TOGGLE_MODAL`,
};

export { NameSpace };

export default combineReducers({
  [NameSpace.CARDS]: QuestsData,
  [NameSpace.QUEST_CARD]: CardData,
  [NameSpace.URL_ID]: CardUrlId,
  [NameSpace.FILTER]: filter,
  [NameSpace.FILTERED_CARDS]: cardFiltered,
  [NameSpace.TOGGLE_MODAL]: modalToggle,
});

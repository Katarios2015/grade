import { combineReducers } from 'redux';
import { cardData } from './reducers/quest-card-data/quest-card-data';
import { questsData } from './reducers/quests-data/quests-data';
import { cardUrlId } from './reducers/url-id/url-id';
import { filter } from './reducers/filter/filter';
import { cardFiltered } from './reducers/filtred-quests/filtred-quests';
import { modalToggle } from './reducers/modal/modal';
import { activeLink } from './reducers/active-link/active-link';

 const NameSpace = {
  Cards: `Cards`,
  QuestCard: `CARD`,
  UrlId: `URL_ID`,
  Filter: `FILTER`,
  FiltredCards: `FILTERED_CARDS`,
  ToggleModal: `TOGGLE_MODAL`,
  ActiveLink: `ACTIVE_LINK`,
};

export { NameSpace };

export default combineReducers({
  [NameSpace.Cards]: questsData,
  [NameSpace.QuestCard]: cardData,
  [NameSpace.UrlId]: cardUrlId,
  [NameSpace.Filter]: filter,
  [NameSpace.FiltredCards]: cardFiltered,
  [NameSpace.ToggleModal]: modalToggle,
  [NameSpace.ActiveLink]: activeLink,
});

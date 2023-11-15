import { getFiltredQuests } from '../components/home/components/utils/utils';

const ActionType = {
  LOAD_QUESTS: `home/loadQuests`,
  LOAD_QUEST_CARD: `quest/loadQuestcard`,
  CARD_URL_ID: `quest/getCardUrlId`,
  FILTER_TYPE: `home/addFilter`,
  FILTRED_CARDS: `home/filtering`,
  CHANGE_TOGGLE: `quest/cangeToggleModal`,
};

const loadQuests = (cards) => ({
  type: ActionType.LOAD_QUESTS,
  payload: cards,
});

const loadQuestCard = (card) => ({
  type: ActionType.LOAD_QUEST_CARD,
  payload: card,
});

const getCardUrlId = (urlId) => ({
  type: ActionType.CARD_URL_ID,
  payload: urlId,
});

const addFilter = (filterType) => ({
  type: ActionType.FILTER_TYPE,
  payload: filterType,
});

const filtering = (filterName, cards) => ({
  type: ActionType.FILTRED_CARDS,
  payload: getFiltredQuests(filterName, cards),
});

const changeToggleModal = (toggle) => ({
  type: ActionType.CHANGE_TOGGLE,
  payload: toggle,
});

export {
  loadQuests,
  loadQuestCard,
  getCardUrlId,
  addFilter,
  filtering,
  changeToggleModal,
  ActionType,
};

import { getFiltredQuests } from '../components/home/components/utils/utils';

const ActionType = {
  LoadQuests: `home/loadQuests`,
  LoadQuestCard: `quest/loadQuestcard`,
  CardUrlId: `quest/getCardUrlId`,
  FilterType: `home/addFilter`,
  FiltredCards: `home/filtering`,
  ChangeToggle: `quest/cangeToggleModal`,
  ActiveLink: `header/addActiveLink`,
  RedirectToRoute: `page/redirectToRoute`,
};

const loadQuests = (cards) => ({
  type: ActionType.LoadQuests,
  payload: cards,
});

const loadQuestCard = (card) => ({
  type: ActionType.LoadQuestCard,
  payload: card,
});

const getCardUrlId = (urlId) => ({
  type: ActionType.CardUrlId,
  payload: urlId,
});

const addFilter = (filterType) => ({
  type: ActionType.FilterType,
  payload: filterType,
});

const filtering = (filterName, cards) => ({
  type: ActionType.FiltredCards,
  payload: getFiltredQuests(filterName, cards),
});

const changeToggleModal = (toggle) => ({
  type: ActionType.ChangeToggle,
  payload: toggle,
});

const addActiveLink = (title) => ({
  type: ActionType.ActiveLink,
  payload: title,
});

const redirectToRoute = (url) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export {
  loadQuests,
  loadQuestCard,
  getCardUrlId,
  addFilter,
  filtering,
  changeToggleModal,
  addActiveLink,
  redirectToRoute,
  ActionType,
};

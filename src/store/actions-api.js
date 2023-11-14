import { loadQuests, loadQuestCard } from './actions';

const fetchCards = () => (dispatch, _getState, api) =>
  api.get(`/quests`).then(({ data }) => dispatch(loadQuests(data)));

const fetchQuest = () => (dispatch, getState, api) =>
  api.get(`/quests/${getState().URL_ID.urlId}`)
    .then(({ data }) => dispatch(loadQuestCard(data)));

export { fetchCards, fetchQuest };

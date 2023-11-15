import { loadQuests, loadQuestCard, changeToggleModal } from './actions';

const fetchCards = () => (dispatch, _getState, api) =>
  api.get(`/quests`).then(({ data }) => dispatch(loadQuests(data)));

const fetchQuest = () => (dispatch, getState, api) =>
  api
    .get(`/quests/${getState().URL_ID.urlId}`)
    .then(({ data }) => dispatch(loadQuestCard(data)));

const postOrder = ({name: name, phone, peopleCount, isLegal}) => (dispatch, _getState, api) =>
  api
    .post(`/orders`, {name, phone, peopleCount, isLegal})
    .then(() => dispatch(changeToggleModal(false)))
    .catch((error) => console.log(`Ошибка ` + error));

export { fetchCards, fetchQuest, postOrder };

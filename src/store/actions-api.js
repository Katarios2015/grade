import {
  loadQuests,
  loadQuestCard,
  changeToggleModal,
  redirectToRoute,
} from './actions';

import { ApiRoute } from './utils/consts';

const fetchCards = () => (dispatch, _getState, api) =>
  api
    .get(ApiRoute.Quests)
    .then(({ data }) => dispatch(loadQuests(data)))
    .catch(() => {
      dispatch(redirectToRoute(ApiRoute.NotFound));
    });

const fetchQuest = () => (dispatch, getState, api) =>
  api
    .get(`${ApiRoute.Quests}/${getState().URL_ID.urlId}`)
    .then(({ data }) => dispatch(loadQuestCard(data)))
    .catch(() => {
      dispatch(redirectToRoute(ApiRoute.NotFound));
    });

const postOrder =
  ({ name, phone, peopleCount, isLegal }) =>
  (dispatch, _getState, api) =>
    api
      .post(ApiRoute.Orders, { name, phone, peopleCount, isLegal })
      .then(() => dispatch(changeToggleModal(false)))
      .catch((error) => console.log(`Ошибка ` + error));

export { fetchCards, fetchQuest, postOrder };

import {loadQuests, loadQuestCard} from './actions';

const fetchCards = () => (dispatch, _getState, api) => (
  api.get(`/quests`)
    .then(({data}) => dispatch(loadQuests(data)))
);

const fetchQuest = () => (dispatch, getState, api) => (
  api.get(`/quests/${getState().id}`) // TODO сделать выгрузку id  в state
    .then(({data}) => dispatch(loadQuestCard(data)))
);

export {fetchCards, fetchQuest};

const ActionType = {
  LOAD_QUESTS: `home/loadQuests`,
  LOAD_QUEST_CARD: `quest/loadQuestcard`,
  CARD_URL_ID: `quest/getCardUrlId`,
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

export { loadQuests, loadQuestCard, getCardUrlId, ActionType };
